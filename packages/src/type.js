// 获取对象原型的toString方法
const toString = Object.prototype.toString;

/**
 * 判断值是否为某个类型
 * @param {*} value 数据内容
 * @param {string} type 类型名称
 * @returns {boolean} 是否为指定类型
 */
export function type(value, type) {
    return toString.call(value) === `[object ${type}]`;
}

/**
 * 获取对象数据类型
 * @param {*} obj 数据内容
 * @returns {string} 数据类型
 */
export function getObjType(obj) {
    if (obj instanceof Element) return 'element';
    const typeString = toString.call(obj);
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[typeString] || 'unknown';
}

/**
 * 是否为字符串
 * @param {*} value 数据内容
 * @returns {boolean} 是否为字符串
 */
export function isString(value) {
    return typeof value === 'string';
}

/**
 * 是否为数值
 * @param {*} value 数据内容
 * @returns {boolean} 是否为数值
 */
export function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

/**
 * 是否为布尔值
 * @param {*} value 数据内容
 * @returns {boolean} 是否为布尔值
 */
export function isBoolean(value) {
    return typeof value === 'boolean';
}

/**
 * 是否为数组
 * @param {*} value 数据内容
 * @returns {boolean} 是否为数组
 */
export function isArray(value) {
    return Array.isArray(value);
}

/**
 * 是否为对象
 * @param {*} value 数据内容
 * @returns {boolean} 是否为对象
 */
export function isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * 是否为时间对象
 * @param {*} value 数据内容
 * @returns {boolean} 是否为时间对象
 */
export function isDate(value) {
    return value instanceof Date && !isNaN(value.getTime());
}

/**
 * 是否为函数
 * @param {*} func 数据内容
 * @returns {boolean} 是否为函数
 */
export function isFunction(func) {
    return typeof func === 'function';
}

/**
 * 是否为异步函数
 * @param {*} func 数据内容
 * @returns {boolean} 是否为异步函数
 */
export function isAsyncFunction(func) {
    return func instanceof AsyncFunction;
}

/**
 * 是否为Promise对象
 * @param {*} value 数据内容
 * @returns {boolean} 是否为Promise对象
 */
export function isPromise(value) {
    return value instanceof Promise || (
        isObject(value) && isFunction(value.then) && isFunction(value.catch)
    );
}

/**
 * 是否为DOM元素
 * @param {*} value 数据内容
 * @returns {boolean} 是否为DOM元素
 */
export function isElement(value) {
    return value instanceof Element || (
        isObject(value) && isString(value.nodeName) && value.nodeType === 1
    );
}

// 用于判断异步函数的构造函数
const AsyncFunction = (async () => {}).constructor;
