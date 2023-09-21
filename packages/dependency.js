// 创建一个全局的依赖注入容器
const dependencyContainer = {};

/**
 * 提供依赖的方法
 * @param key   注入名
 * @param value 提供的值
 */
export function provide(key, value) {
    dependencyContainer[key] = value;
}

/**
 * 获取依赖的方法
 * @param key           注入名
 * @param defaultValue 注入默认值
 * @returns {*|string}
 */
export function inject(key, defaultValue = '') {
    if (key in dependencyContainer) {
        return dependencyContainer[key];
    }
    return defaultValue;
}
