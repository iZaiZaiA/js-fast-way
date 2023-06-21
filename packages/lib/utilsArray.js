import { isArray } from './isType';

/**
 * 创建初始数组
 * @param value 默认值
 * @param len   数组长度
 * @returns {any[]}
 */
export function createArr(value = '', len= 1)
{
    return new Array(len).fill(value)
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
 * 一维数组中是否存在
 * @param arr       一维数组
 * @param key       内容
 * @param variable  变量
 * @returns {boolean}
 */
export function isArrItem(arr, key, variable = -1)
{
    const index = arr.indexOf(key)
    variable = index
    return index !== -1
}

/**
 * 二维数组中是否存在
 * @param arr       二维数组
 * @param field     字段名
 * @param key       字段值
 * @param variable  变量
 * @returns {boolean}
 */
export function isArrIndex(arr, field, key, variable = -1)
{
    const index = arrIndex(arr, field, key)
    variable = index
    return index !== -1
}


/**
 * 获取二维数组索引
 * @param arr   二维数组
 * @param field 字段名
 * @param key   字段值
 * @returns {*}
 */
export function arrIndex(arr, field, key)
{
    return arr.findIndex((item) => {
        return item[field] == key;
    });
}


/**
 * 移除数组中指定元素
 * @param arr   数组
 * @param item  元素内容
 * @returns {*[]}
 */
export function arrDel(arr, item)
{
    let index = arr.indexOf(item);
    if (index === -1) return arr;
    let items = [...arr];
    items.splice(index, 1);
    return [...items];
}


/**
 * 移除二维数组中指定元素
 * @param arr   二维数组
 * @param field 字段名
 * @param key   字段值
 * @returns {*[]}
 */
export function arrDelKey(arr, field, key)
{
    const index = arrIndex(arr, field, key);
    if (index === -1) return arr;
    return arrDel(arr, arr[index]);
}



/**
 * 移除数组中其它元素
 * @param arr   数组
 * @param item  元素内容
 * @returns {*[]}
 */
export function arrDelOther(arr, item)
{
    let index = arr.indexOf(item);
    if (index === -1) return arr;
    let items = [...arr];
    for (let i = 0; i < arr.length; i++) {
        if (index !== i) items.splice(i, 1);
    }
    return [...items];
}

/**
 * 移除二维数组中其它元素
 * @param arr   二维数组
 * @param field 字段名
 * @param key   字段值
 * @returns {*[]}
 */
export function arrDelKeyOther(arr, field, key)
{
    const index = arrIndex(arr, field, key);
    if (index === -1) return arr;
    return arrDelOther(arr, arr[index]);
}


/**
 * 移除数组中左边的元素
 * @param arr   数组
 * @param item  元素内容
 * @returns {*[]}
 */
export function arrDelLeft(arr, item)
{
    let index = arr.indexOf(item);
    if (index === -1) return arr;
    let items = [...arr];
    for (let i = 0; i < arr.length; i++) {
        if (index >= i) {
            break;
        } else {
            items.splice(i, 1);
        }
    }
    return [...items];
}

/**
 * 移除二维数组中左边的元素
 * @param arr   二维数组
 * @param field 字段名
 * @param key   字段值
 * @returns {*[]}
 */
export function arrDelKeyLeft(arr, field, key)
{
    const index = arrIndex(arr, field, key);
    if (index === -1) return arr;
    return arrDelLeft(arr, arr[index]);
}


/**
 * 移除数组中右边的元素
 * @param arr   数组
 * @param item  元素内容
 * @returns {*[]}
 */
export function arrDelRight(arr, item)
{
    let index = arr.indexOf(item);
    if (index === -1) return arr;
    let items = [...arr];
    for (let i = 0; i < arr.length; i++) {
        if (index > i) items.splice(i, 1);
    }
    return [...items];
}

/**
 * 移除二维数组中右边的元素
 * @param arr   二维数组
 * @param field 字段名
 * @param key   字段值
 * @returns {*[]}
 */
export function arrDelKeyRight(arr, field, key)
{
    const index = arrIndex(arr, field, key);
    if (index === -1) return arr;
    return arrDelRight(arr, arr[index]);
}


/**
 * 替换数组中两个元素的位置
 * @param arr   数组
 * @param item1 元素1
 * @param item2 元素2
 * @returns {*[]}
 */
export function arrReplace(arr, item1, item2)
{
    let index1 = arr.indexOf(item1);
    let index2 = arr.indexOf(item2);
    if (index1 === -1 || index2 === -1) return arr;
    let items = [...arr];
    items.splice(index1, 1);
    items.splice(index2, 0, item1);
    return [...items];
}


/**
 * 得到两个数组的交集, 两个数组的元素为数值或字符串
 * @param arr1 数组1
 * @param arr2 数组2
 * @returns {*[]}
 */
export function arrIntersection(arr1, arr2)
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
export function arrUnion(arr1, arr2)
{
    return Array.from(new Set([...arr1, ...arr2]));
}


/**
 * 判断要查询的数组是否至少有一个元素包含在目标数组中
 * @param arr1 数组1
 * @param arr2 数组2
 * @returns {*}
 */
export function arrSomeOf(arr1, arr2)
{
    return arr1.some(_ => arr2.indexOf(_) > -1);
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
 * @param field     字段名
 * @param join      分隔符
 * @returns {*}
 */
export function arrToKey(arr, field= 'id', join = ',')
{
    return arr.map((obj) => {
        return obj[field];
    }).join(join)
}


/**
 * 取数组数据, 如果数据存在，就返回原始数据。如果不存在，就返回 空数组 []
 * @param value 数据内容
 * @returns {*|*[]}
 */
export function getArrValue(value)
{
    return isArray(value) ? value : [];
}


/**
 * 取数组中的值
 * @param arr       数组
 * @param field     字段名
 * @param key       字段名2
 * @param value     字段值
 * @returns {*|string}
 */
export function arrKeyValue(arr, field, key, value)
{
    if (value) {
        const index = arrIndex(arr, field, value)
        return arr[index][key] ?? ''
    } else {
        return ''
    }
}

/**
 * 数组对象排序
 * @param key   排序字段
 * @param order 排序方式
 * @returns {(function(*, *): (number|number))|*}
 */
export function arrCompare(key, order = 'asc')
{
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // 该属性在任何一个对象上都不存在
            return 0;
        }
        const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}

/**
 * 数组对象排序
 * @param arr   数组
 * @param field 字段名
 * @param order 排序方式 正序 asc  倒序 desc
 * @returns {*}
 */
export function arrKeySort(arr, field = 'id', order = 'asc')
{
    if (isArray(arr)) {
        return arr.sort(arrCompare(field, order));
    } else {
        return arr;
    }
}
