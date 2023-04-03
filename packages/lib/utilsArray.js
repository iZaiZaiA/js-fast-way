import {getObjValue, getObjNullValue} from './isType';

/**
 * 一维数组中是否存在
 * @param arr 一维数组
 * @param item 内容
 * @returns {boolean}
 */
export function isItem(arr, item)
{
    return arr.indexOf(item) !== -1;
}

/**
 * 二维数组中是否存在
 * @param arr 二维数组
 * @param field 字段名
 * @param key   字段值
 * @returns {boolean}
 */
export function isIndex(arr, field, key)
{
    return getIndex(arr, field, key) !== -1
}

/**
 * 移除数组中指定元素
 * @param arr   数组
 * @param item  元素内容
 * @returns {*[]}
 */
export function del(arr, item)
{
    let index = arr.indexOf(item);
    let items = [...arr];
    items.splice(index, 1);
    return [...items];
}

/**
 * 移除数组中其它元素
 * @param arr   数组
 * @param item  元素内容
 * @returns {*[]}
 */
export function delOther(arr, item)
{
    let index = arr.indexOf(item);
    let items = [...arr];
    for (let i = 0; i < arr.length; i++) {
        if (index !== i) items.splice(i, 1);
    }
    return [...items];
}

/**
 * 移除数组中左边的元素
 * @param arr   数组
 * @param item  元素内容
 * @returns {*[]}
 */
export function delLeft(arr, item)
{
    let index = arr.indexOf(item);
    let items = [...arr];
    for (let i = 0; i < arr.length; i++) {
        if (index >= i) return;
        items.splice(i, 1);
    }
    return [...items];
}

/**
 * 移除数组中右边的元素
 * @param arr   数组
 * @param item  元素内容
 * @returns {*[]}
 */
export function delRight(arr, item)
{
    let index = arr.indexOf(item);
    let items = [...arr];
    for (let i = 0; i < arr.length; i++) {
        if (index > i) items.splice(i, 1);
    }
    return [...items];
}

/**
 * 替换数组中两个元素的位置
 * @param arr   数组
 * @param item1 元素1
 * @param item2 元素2
 * @returns {*[]}
 */
export function replaceItem(arr, item1, item2)
{
    let index1 = arr.indexOf(item1);
    let index2 = arr.indexOf(item2);
    let items = [...arr];
    items.splice(index1, 1);
    items.splice(index2, 0, item1);
    return [...items];
}

/**
 * 获取二维数组索引
 * @param arr   二维数组
 * @param field 字段名
 * @param key   字段值
 * @returns {*}
 */

export function getIndex(arr, field, key)
{
    return arr.findIndex((item) => {
        return item[field] == key;
    });
}

/**
 * 移除二维数组中指定元素
 * @param arr   二维数组
 * @param field 字段名
 * @param key   字段值
 * @returns {*[]}
 */
export function delKey(arr, field, key)
{
    const index = getIndex(arr, field, key);
    return del(arr, arr[index]);
}

/**
 * 移除二维数组中其它元素
 * @param arr   二维数组
 * @param field 字段名
 * @param key   字段值
 * @returns {*[]}
 */
export function delKeyOther(arr, field, key)
{
    const index = getIndex(arr, field, key);
    return delOther(arr, arr[index]);
}

/**
 * 移除二维数组中左边的元素
 * @param arr   二维数组
 * @param field 字段名
 * @param key   字段值
 * @returns {*[]}
 */
export function delKeyLeft(arr, field, key)
{
    const index = getIndex(arr, field, key);
    return delLeft(arr, arr[index]);
}

/**
 * 移除二维数组中右边的元素
 * @param arr   二维数组
 * @param field 字段名
 * @param key   字段值
 * @returns {*[]}
 */
export function delKeyRight(arr, field, key)
{
    const index = getIndex(arr, field, key);
    return delRight(arr, arr[index]);
}

/**
 * 得到两个数组的交集, 两个数组的元素为数值或字符串
 * @param arr1 数组1
 * @param arr2 数组2
 * @returns {*[]}
 */
export function intersection(arr1, arr2)
{
    let len = Math.min(arr1.length, arr2.length)
    let i = -1, res = [];
    while (++i < len) {
        if (arr1.indexOf(arr2[i]) > -1) res.push(arr2[i])
    }
    return res
}

/**
 * 得到两个数组的并集, 两个数组的元素为数值或字符串
 * @param arr1 数组1
 * @param arr2 数组2
 * @returns {*[]}
 */
export function getUnion(arr1, arr2)
{
    return Array.from(new Set([...arr1, ...arr2]));
}

/**
 * 判断要查询的数组是否至少有一个元素包含在目标数组中
 * @param arr1 数组1
 * @param arr2 数组2
 * @returns {*}
 */
export function hasOneOf(arr1, arr2)
{
    return arr1.some(_ => arr2.indexOf(_) > -1);
}

/**
 * 数组随机打乱的方法
 * @param arr 数组
 * @returns {*}
 */
export function arrShuffle(arr)
{
    return arr.sort(() => Math.random() - 0.5)
}

/**
 * 创建初始数组
 * @param len 数组长度
 * @param val 默认值
 * @returns {any[]}
 */
export function arrFill(len= 1,val = '')
{
    return new Array(len).fill(val)
}


/**
 * 数组转对象
 * @param arr 数组数据
 * @param keyName 对象键值名
 * @param objName 对象变量
 * @param arrName 数组变量
 * @param children 子级字段名
 * @returns {Promise<void>}
 * @constructor
 */
export async function ArrToOneObj(arr, keyName, objName = {}, arrName = [], children = 'children')
{
    if (arr && arr.length > 0) {
        for (const item of arr) {
            objName[item[keyName]] = {}
            arrName.push(item[keyName])
            for (const key of Object.keys(item)) {
                if (key !== children) {
                    objName[item[keyName]][key] = item[key]
                }
                if (key === children && item[children] && item[children].length > 0) {
                    await ArrToOneObj(item[children], keyName, objName, arrName, children)
                }
            }
        }
    }
}


/**
 * 取转换后的对象值
 * @param objName   对象数据
 * @param keyName   对象键值名
 * @param keyName2  字段名
 * @returns {boolean|{}|*|string}
 */
export function getOneObjValue(objName = {}, keyName, keyName2)
{
    if (keyName2) {
        const objValue = getObjValue(objName[keyName])
        return objValue[keyName2] || ''
    } else {
        return getObjNullValue(objName[keyName])
    }
}


/**
 * 拼接二维数组中的ID
 * @param arr       二维数组
 * @returns {*}
 */
export function arrToId(arr)
{
    return arrToKey(arr, 'id')
}


/**
 * 拼接二维数组中的字段
 * @param arr       二维数组
 * @param key       字段名
 * @returns {*}
 */
export function arrToKey(arr, key)
{
    return arr.map((obj) => {
        return obj[key];
    }).join(",")
}

