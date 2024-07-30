let iTimes

//防止并发操作，阻止2毫秒内的操作
export function useClick() {
    return new Promise((resolve) => {
        clearTimeout(iTimes)
        iTimes = setTimeout(() => {
            resolve(true)
        }, 200)
    })
}

// 防抖函数
export function debounce(fn, delay = 200) {
    let timer = null
    return function() {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}
