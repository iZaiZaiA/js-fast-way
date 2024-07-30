/**
 * 创建一个微型跨文件、全局事件监听器
 * @param {Map} [all] - 可选的初始事件映射
 * @returns {Object} 事件监听器对象
 */
export function useMitt(all) {
    // 事件名称到已注册处理程序函数的映射
    all = all || new Map();

    return {
        /**
         * 注册事件处理程序
         * @param {string} key - 事件key
         * @param {Function} fun - 事件处理函数
         */
        on(key, fun) {
            if (typeof key !== 'string' || typeof fun !== 'function') {
                console.error('on 方法的参数无效');
                return;
            }
            let handlers = all.get(key);
            if (handlers && handlers instanceof Set) {
                handlers.add(fun);
            } else {
                all.set(key, new Set([fun]));
            }
        },

        /**
         * 注销事件处理程序
         * @param {string} key - 事件key
         * @param {Function} [fun] - 可选的特定事件处理函数
         */
        off(key, fun) {
            if (typeof key !== 'string') {
                console.error('off 方法的 key 参数无效');
                return;
            }
            const handlers = all.get(key);
            if (handlers) {
                if (fun && typeof fun === 'function') {
                    handlers.delete(fun);
                } else {
                    all.set(key, new Set());
                }
            }
        },

        /**
         * 触发事件
         * @param {string} key - 事件key
         * @param {*} data - 传递给事件处理函数的数据
         */
        emit(key, data) {
            if (typeof key !== 'string') {
                console.error('emit 方法的 key 参数无效');
                return;
            }
            const handlers = all.get(key);
            if (handlers) {
                handlers.forEach((handler) => {
                    try {
                        handler(data);
                    } catch (error) {
                        console.error(`${key} 的事件处理器发生错误:`, error);
                    }
                });
            }
        },

        /**
         * 清理所有事件监听器
         */
        clear() {
            all.clear();
        }
    };
}

// 创建一个全局事件发射器实例
export const emitter = useMitt();
