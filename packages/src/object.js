import { isObject } from "./type";
import { isObjNull } from "./validate";
import { produce } from "../plugins/immer";

/**
 * 对象深拷贝
 * @param {Object} obj 深拷贝的对象
 * @param {WeakMap} cache 缓存已拷贝的对象
 * @returns {*} 深拷贝后的对象
 */
export function deepClone(obj, cache = new WeakMap()) {
    if (!isObject(obj)) {
        return obj;
    }

    if (cache.has(obj)) {
        return cache.get(obj);
    }

    const cloneTarget = Array.isArray(obj) ? [] : {};
    cache.set(obj, cloneTarget);

    Object.keys(obj).forEach(key => {
        cloneTarget[key] = deepClone(obj[key], cache);
    });

    return cloneTarget;
}

/**
 * 深拷贝数据 (使用 immer 的 produce 函数)
 * @param {*} data 数据
 * @param {Function} fn 处理函数
 * @returns {*} 深拷贝后的数据
 */
export function deepCloneV2(data, fn) {
    return produce(data, fn);
}

/**
 * 判断一个对象是否存在key，或者对象是否为空
 * @param {Object} obj 对象
 * @param {string} [key] 字段 (可选)
 * @returns {boolean} 判断结果
 */
export function objHasKey(obj, key) {
    if (key) return key in obj;
    return Object.keys(obj).length > 0;
}

/**
 * 判断两个对象是否相等
 * @param {Object} obj1 对象1
 * @param {Object} obj2 对象2
 * @returns {boolean} 是否相等
 */
export function objEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];
        const areObjects = isObject(val1) && isObject(val2);
        if (
            areObjects && !objEqual(val1, val2) ||
            !areObjects && val1 !== val2
        ) {
            return false;
        }
    }

    return true;
}

/**
 * 获取对象值
 * @param {*} value 输入值
 * @param {boolean} [returnFalseIfEmpty=false] 如果为空对象是否返回false
 * @returns {Object|boolean} 处理后的值
 */
export function getObjValue(value, returnFalseIfEmpty = false) {
    if (!isObject(value)) {
        return returnFalseIfEmpty ? false : {};
    }
    return returnFalseIfEmpty && isObjNull(value) ? false : value;
}

/**
 * 获取对象的嵌套属性值
 * @param {Object} obj 对象
 * @param {string} field 字段名
 * @param {string} [key] 子字段名 (可选)
 * @returns {*} 属性值
 */
export function getToObjVal(obj = {}, field, key) {
    const value = obj?.[field];
    if (key) {
        return value?.[key] ?? '';
    }
    return getObjValue(value, true);
}

/**
 * 取对象数据2, 如果数据存在，返回原始数据。如果不存在，或为空对象时,返回false
 * @param value 数据内容
 * @returns {boolean | {}}
 */
export function getObjVal(value)
{
    const res = getObjValue(value);
    return isObjNull(res) ? false : res;
}
