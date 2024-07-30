// 创建一个全局的依赖注入容器
const dependencyContainer = Object.create(null);

/**
 * 提供依赖的方法
 * @param {string} key   注入名
 * @param {*} value 提供的值
 * @throws {Error} 如果key不是字符串类型
 */
export function provide(key, value) {
    if (typeof key !== 'string') {
        throw new Error('依赖注入的key必须是字符串类型');
    }
    dependencyContainer[key] = value;
}

/**
 * 获取依赖的方法
 * @param {string} key           注入名
 * @param {*} [defaultValue] 注入默认值
 * @returns {*} 依赖值或默认值
 */
export function inject(key, defaultValue) {
    if (typeof key !== 'string') {
        console.warn('依赖注入的key应该是字符串类型');
        return defaultValue;
    }
    return key in dependencyContainer ? dependencyContainer[key] : defaultValue;
}

/**
 * 检查是否存在某个依赖
 * @param {string} key 注入名
 * @returns {boolean} 是否存在该依赖
 */
export function has(key) {
    return key in dependencyContainer;
}

/**
 * 移除某个依赖
 * @param {string} key 注入名
 */
export function remove(key) {
    delete dependencyContainer[key];
}

/**
 * 清空所有依赖
 */
export function clear() {
    for (const key in dependencyContainer) {
        delete dependencyContainer[key];
    }
}
