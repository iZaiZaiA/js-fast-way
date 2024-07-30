import { isArray } from './type';

/**
 * 创建初始数组
 * @param {*} value - 默认值
 * @param {number} len - 数组长度
 * @returns {Array} - 新创建的数组
 */
export const createArr = (value = '', len = 1) => Array(len).fill(value);

/**
 * 数组随机打乱的方法
 * @param {Array} arr - 待打乱的数组
 * @returns {Array} - 打乱后的新数组
 */
export function arrShuffle(arr) {
    if (!isArray(arr)) return [];
    return [...arr].sort(() => Math.random() - 0.5);
}

/**
 * 一维数组中是否存在
 * @param {Array} arr - 一维数组
 * @param {*} key - 内容
 * @param {number} variable - 变量
 * @returns {boolean}
 */
export function isArrItem(arr, key, variable = -1) {
    if (!isArray(arr)) return false;
    const index = arr.indexOf(key);
    if (typeof variable === 'object') {
        variable.value = index;
    }
    return index !== -1;
}

/**
 * 二维数组中是否存在
 * @param {Array} arr - 二维数组
 * @param {string} field - 字段名
 * @param {*} key - 字段值
 * @param {number} variable - 变量
 * @returns {boolean}
 */
export function isArrIndex(arr, field, key, variable = -1) {
    if (!isArray(arr)) return false;
    const index = arrIndex(arr, field, key);
    if (typeof variable === 'object') {
        variable.value = index;
    }
    return index !== -1;
}

/**
 * 获取二维数组索引
 * @param {Array} arr - 二维数组
 * @param {string} field - 字段名
 * @param {*} key - 字段值
 * @returns {number}
 */
export function arrIndex(arr, field, key) {
    if (!isArray(arr)) return -1;
    return arr.findIndex((item) => item[field] == key);
}

/**
 * 移除数组中指定元素
 * @param {Array} arr - 数组
 * @param {*} item - 元素内容
 * @returns {Array}
 */
export function arrDel(arr, item) {
    if (!isArray(arr)) return [];
    const index = arr.indexOf(item);
    if (index === -1) return [...arr];
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

/**
 * 移除二维数组中指定元素
 * @param {Array} arr - 二维数组
 * @param {string} field - 字段名
 * @param {*} key - 字段值
 * @returns {Array}
 */
export function arrDelKey(arr, field, key) {
    if (!isArray(arr)) return [];
    const index = arrIndex(arr, field, key);
    if (index === -1) return [...arr];
    return arrDel(arr, arr[index]);
}

/**
 * 移除数组中其它元素
 * @param {Array} arr - 数组
 * @param {*} item - 元素内容
 * @returns {Array}
 */
export function arrDelOther(arr, item) {
    if (!isArray(arr)) return [];
    const index = arr.indexOf(item);
    if (index === -1) return [];
    return [arr[index]];
}

/**
 * 移除二维数组中其它元素
 * @param {Array} arr - 二维数组
 * @param {string} field - 字段名
 * @param {*} key - 字段值
 * @returns {Array}
 */
export function arrDelKeyOther(arr, field, key) {
    if (!isArray(arr)) return [];
    const index = arrIndex(arr, field, key);
    if (index === -1) return [];
    return [arr[index]];
}

/**
 * 移除数组中左边的元素
 * @param {Array} arr - 数组
 * @param {*} item - 元素内容
 * @returns {Array}
 */
export function arrDelLeft(arr, item) {
    if (!isArray(arr)) return [];
    const index = arr.indexOf(item);
    if (index === -1) return [...arr];
    return arr.slice(index);
}

/**
 * 移除二维数组中左边的元素
 * @param {Array} arr - 二维数组
 * @param {string} field - 字段名
 * @param {*} key - 字段值
 * @returns {Array}
 */
export function arrDelKeyLeft(arr, field, key) {
    if (!isArray(arr)) return [];
    const index = arrIndex(arr, field, key);
    if (index === -1) return [...arr];
    return arr.slice(index);
}

/**
 * 移除数组中右边的元素
 * @param {Array} arr - 数组
 * @param {*} item - 元素内容
 * @returns {Array}
 */
export function arrDelRight(arr, item) {
    if (!isArray(arr)) return [];
    const index = arr.indexOf(item);
    if (index === -1) return [...arr];
    return arr.slice(0, index + 1);
}

/**
 * 移除二维数组中右边的元素
 * @param {Array} arr - 二维数组
 * @param {string} field - 字段名
 * @param {*} key - 字段值
 * @returns {Array}
 */
export function arrDelKeyRight(arr, field, key) {
    if (!isArray(arr)) return [];
    const index = arrIndex(arr, field, key);
    if (index === -1) return [...arr];
    return arr.slice(0, index + 1);
}

/**
 * 替换数组中两个元素的位置
 * @param {Array} arr - 数组
 * @param {*} item1 - 元素1
 * @param {*} item2 - 元素2
 * @returns {Array}
 */
export function arrReplace(arr, item1, item2) {
    if (!isArray(arr)) return [];
    const index1 = arr.indexOf(item1);
    const index2 = arr.indexOf(item2);
    if (index1 === -1 || index2 === -1) return [...arr];
    const newArr = [...arr];
    [newArr[index1], newArr[index2]] = [newArr[index2], newArr[index1]];
    return newArr;
}

/**
 * 得到两个数组的交集, 两个数组的元素为数值或字符串
 * @param {Array} arr1 - 数组1
 * @param {Array} arr2 - 数组2
 * @returns {Array}
 */
export function arrIntersection(arr1, arr2) {
    if (!isArray(arr1) || !isArray(arr2)) return [];
    return arr1.filter(item => arr2.includes(item));
}

/**
 * 得到两个数组的并集, 两个数组的元素为数值或字符串
 * @param {Array} arr1 - 数组1
 * @param {Array} arr2 - 数组2
 * @returns {Array}
 */
export function arrUnion(arr1, arr2) {
    if (!isArray(arr1) || !isArray(arr2)) return [];
    return Array.from(new Set([...arr1, ...arr2]));
}

/**
 * 判断要查询的数组是否至少有一个元素包含在目标数组中
 * @param {Array} arr1 - 数组1
 * @param {Array} arr2 - 数组2
 * @returns {boolean}
 */
export function arrSomeOf(arr1, arr2) {
    if (!isArray(arr1) || !isArray(arr2)) return false;
    return arr1.some(item => arr2.includes(item));
}

/**
 * 拼接二维数组中的ID
 * @param {Array} arr - 二维数组
 * @returns {string}
 */
export function arrToId(arr) {
    return arrToKey(arr, 'id');
}

/**
 * 拼接二维数组中的字段
 * @param {Array} arr - 二维数组
 * @param {string} field - 字段名
 * @param {string} join - 分隔符
 * @returns {string}
 */
export function arrToKey(arr, field = 'id', join = ',') {
    if (!isArray(arr)) return '';
    return arr.map(obj => obj[field]).join(join);
}

/**
 * 取数组数据, 如果数据存在，就返回原始数据。如果不存在，就返回空数组 []
 * @param {*} value - 数据内容
 * @returns {Array}
 */
export function getArrValue(value) {
    return isArray(value) ? value : [];
}

/**
 * 取数组中的值
 * @param {Array} arr - 数组
 * @param {string} field - 字段名
 * @param {string} key - 字段名2
 * @param {*} value - 字段值
 * @returns {*}
 */
export function arrKeyValue(arr, field, key, value) {
    if (!isArray(arr) || !value) return '';
    const index = arrIndex(arr, field, value);
    return index !== -1 ? (arr[index][key] ?? '') : '';
}

/**
 * 数组对象排序
 * @param {string} key - 排序字段
 * @param {string} order - 排序方式
 * @returns {Function}
 */
export function arrCompare(key, order = 'asc') {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }
        const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (order === 'desc') ? (comparison * -1) : comparison;
    };
}

/**
 * 数组对象排序
 * @param {Array} arr - 数组
 * @param {string} field - 字段名
 * @param {string} order - 排序方式 正序 asc 倒序 desc
 * @returns {Array}
 */
export function arrKeySort(arr, field = 'id', order = 'asc') {
    if (!isArray(arr)) return [];
    return [...arr].sort(arrCompare(field, order));
}

/**
 * 不区分大小写的一维数组查询
 * @param {Array} arr - 数组
 * @param {string} val - 值
 * @returns {number}
 */
export function indexQf(arr, val) {
    if (!isArray(arr) || typeof val !== 'string') return -1;
    const lowerVal = val.toLowerCase();
    return arr.findIndex(item => typeof item === 'string' && item.toLowerCase() === lowerVal);
}

/**
 * 递归获取最子级的数据
 * @param {Array} arr - 数组数据
 * @param {Object} parameter - 参数 {index,children,key}
 * @returns {Promise<*>}
 */
export async function recursionChildren(arr, parameter = {}) {
    if (!isArray(arr) || arr.length === 0) return null;

    const { index = 0, children = 'children', key = '' } = parameter;
    const item = arr[index];

    if (!item) return null;

    const childrenArr = item[children];
    if (isArray(childrenArr) && childrenArr.length > 0) {
        return await recursionChildren(childrenArr, { ...parameter, index: 0 });
    } else {
        return key ? item[key] : item;
    }
}
