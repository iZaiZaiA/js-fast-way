import {isFunction, isObject} from "../src";

function useDebounce(func, wait = 0, options = {}) {
    // 参数验证
    if (!isFunction(func)) {
        throw new TypeError('debounce: 第一个参数必须是函数')
    }

    // 初始化变量
    let lastArgs, lastThis, maxWait, result, timerId, lastCallTime
    let lastInvokeTime = 0
    let leading = false
    let maxing = false
    let trailing = true

    // 处理选项
    if (isObject(options)) {
        leading = !!options.leading
        maxing = 'maxWait' in options
        maxWait = maxing ? Math.max(options.maxWait || 0, wait) : undefined
        trailing = 'trailing' in options ? !!options.trailing : trailing
    }

    // 执行被防抖的函数
    function invokeFunc(time) {
        const args = lastArgs
        const thisArg = lastThis
        lastArgs = lastThis = undefined
        lastInvokeTime = time
        result = func.apply(thisArg, args)
        return result
    }

    // 在前沿执行函数
    function leadingEdge(time) {
        lastInvokeTime = time
        timerId = setTimeout(timerExpired, wait)
        return leading ? invokeFunc(time) : result
    }

    // 计算剩余等待时间
    function remainingWait(time) {
        const timeSinceLastCall = time - lastCallTime
        const timeSinceLastInvoke = time - lastInvokeTime
        const timeWaiting = wait - timeSinceLastCall
        return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting
    }

    // 检查是否应该执行函数
    function shouldInvoke(time) {
        const timeSinceLastCall = time - lastCallTime
        const timeSinceLastInvoke = time - lastInvokeTime
        return (
            lastCallTime === undefined
            || timeSinceLastCall >= wait
            || timeSinceLastCall < 0
            || (maxing && timeSinceLastInvoke >= maxWait)
        )
    }

    // 定时器到期处理
    function timerExpired() {
        const time = Date.now()
        if (shouldInvoke(time)) {
            return trailingEdge(time)
        }
        timerId = setTimeout(timerExpired, remainingWait(time))
    }

    // 在后沿执行函数
    function trailingEdge(time) {
        timerId = undefined
        if (trailing && lastArgs) {
            return invokeFunc(time)
        }
        lastArgs = lastThis = undefined
        return result
    }

    // 取消防抖
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId)
        }
        lastInvokeTime = 0
        lastArgs = lastCallTime = lastThis = timerId = undefined
    }

    // 立即执行
    function flush() {
        return timerId === undefined ? result : trailingEdge(Date.now())
    }

    function debounced(...args) {
        const time = Date.now()
        const isInvoking = shouldInvoke(time)

        lastArgs = args
        lastThis = this
        lastCallTime = time

        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime)
            }
            if (maxing) {
                timerId = setTimeout(timerExpired, wait)
                return invokeFunc(lastCallTime)
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait)
        }
        return result
    }

    debounced.cancel = cancel
    debounced.flush = flush
    return debounced
}

export default useDebounce
