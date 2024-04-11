//微型跨文件，全局事件监听器
export function useMitt(all) {
    //事件名称到已注册处理程序函数的映射.
    all = all || new Map()
    return {
        /**
         * 注册事件处理程序
         * @param key   //事件key
         * @param fun   //事件方法
         */
        on(key, fun) {
            const handlers = all.get(key)
            if (handlers) {
                handlers.push(fun)
            } else {
                all.set(key, [fun])
            }
        },
        /**
         * 关闭事件处理程序
         * @param key   //事件key
         * @param fun   //事件方法
         */
        off(key, fun) {
            const handlers = all.get(key)
            if (handlers) {
                if (fun) {
                    handlers.splice(handlers.indexOf(fun) >>> 0, 1)
                } else {
                    all.set(key, [])
                }
            }
        },
        /**
         * 触发事件
         * @param key   //事件key
         * @param data  //传递数据
         */
        emit(key, data) {
            let handlers = all.get(key)
            if (handlers) {
                // eslint-disable-next-line array-callback-return
                handlers.slice().map((handler) => {
                    handler(data)
                })
            }
        },
    }
}

export const emitter = useMitt()
