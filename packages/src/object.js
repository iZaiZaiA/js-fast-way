import { isObject } from "./type";
import { isObjNull } from "./validate";
import { produce } from "../plugins/immer";

/**
 * 对象深拷贝
 * @param obj       深拷贝的对象
 * @param cache
 * @returns {*|*[]|{}}
 */
export function deepClone(obj, cache = new Map())
{
    const isObject = (obj) => typeof obj === 'object' && obj !== null
    const forEach = (array, cb) => {
        let i = -1, leng = array.length
        while (++i < leng) {
            cb(array[ i ])
        }
    }
    if (isObject(obj)) {
        const cacheObj = cache.get(obj)
        if (cacheObj) return cacheObj
        let cloneTarget = Array.isArray(obj) ? [] : {}
        let keys = Object.keys(obj)
        cache.set(obj, cloneTarget)
        forEach(keys, (key) => {
            const value = obj[ key ]
            cloneTarget[ key ] = isObject(value) ? deepClone(value, cache) : value
        })
        return cloneTarget
    } else {
        return obj
    }
}

/**
 * 深拷贝数据
 * @param data  数据
 * @param fn    函数
 * @returns {*}
 */
export function deepCloneV2(data, fn) {
    return produce(data, fn)
}


/**
 * 判断一个对象是否存在key
 * @param obj   对象
 * @param key   字段
 * @returns {number|boolean}
 */
export function objHasKey(obj, key)
{
    if (key) return key in obj;
    let keysArr = Object.keys(obj);
    return keysArr.length;
}


/**
 * 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 * @param obj1  对象1
 * @param obj2  对象2
 * @returns {boolean}
 */
export function objEqual(obj1, obj2)
{
    const keysArr1 = Object.keys(obj1)
    const keysArr2 = Object.keys(obj2)
    if (keysArr1.length !== keysArr2.length) return false
    else if (keysArr1.length === 0 && keysArr2.length === 0) return true
    else return !keysArr1.some(key => obj1[key] != obj2[key])
}


/**
 * 取对象数据, 如果数据存在，就返回原始数据。如果不存在，就返回 空对象 {}
 * @param value 数据内容
 * @returns {*|{}}
 */
export function getObjValue(value)
{
    return isObject(value) ? value : {};
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


/**
 * 取转换后的对象值
 * @param obj       对象数据
 * @param field     对象键值名
 * @param key       字段名
 * @returns {boolean|{}|*|string}
 */
export function getToObjVal(obj = {}, field, key)
{
    if (key) {
        const objValue = getObjValue(obj[field])
        return objValue[key] || ''
    } else {
        return getObjVal(obj[field])
    }
}

