//判断类型

const toString = Object.prototype.toString;

/**
 * 判断值是否为某个类型
 * @param value 数据内容
 * @param type 类型，boolean、number、string、function、array、date、regExp、undefined、null、object 等
 * @returns {boolean} 是或否
 */
function isType(value, type)
{
    return toString.call(value) === `[object ${type}]`;
}


/**
 * 获取对象数据类型
 * @param obj 数据内容
 * @returns {*|string}
 */
function getObjType(obj)
{
    let map = {
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
    if (obj instanceof Element) {
        return 'element';
    }
    return map[toString.call(obj)];
}


/**
 * 是否为字符串(String)
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
function isString(value)
{
    return isType(value, 'String');
}


/**
 * 是否为数值(Number)
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
function isNumber(value)
{
    return isType(value, 'Number');
}


/**
 * 是否为布尔值(Boolean)
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
function isBoolean(value)
{
    return isType(value, 'Boolean');
}


/**
 * 是否为数组 (Array)
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
function isArray(value)
{
    return value && Array.isArray(value);
}


/**
 * 是否为对象(Object)
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
function isObject(value)
{
    return value !== null && isType(value, 'Object');
}


/**
 * 是否为时间(Date)
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
function isDate(value)
{
    return isType(value, 'Date');
}


/**
 * 是否为方法函数 (Function)
 * @param func 数据内容
 * @returns {boolean} 是或否
 */
function isFunction(func)
{
    return isType(func, 'Function');
}


/**
 * 是否为 Async Function
 * @param func 数据内容
 * @returns {boolean} 是或否
 */
function isAsyncFunction(func)
{
    return isType(func, 'AsyncFunction');
}


/**
 * 是否为Promise
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
function isPromise(value)
{
    return isType(value, 'Promise') && isObject(value) && isFunction(value.then) && isFunction(value.catch);
}


/**
 * 是否为元素（Element）
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
function isElement(value)
{
    return isObject(value) && !!value.tagName;
}


/**
 * 是否为空，undefined、null、空字符串时，返回true
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
function isNullAll(value)
{
    return typeof value === undefined || value === null || value === '';
}

/**
 * 是否为空，采用ES6，最终效果和 isNullAll 一致
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
function isValueNull(value)
{
    return (value??'') === '';
}


/**
 * 判断对象是否为空
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
function isObjNull(value)
{
    return JSON.stringify(value) === "{}";
}

/**
 * 取数组数据, 如果数据存在，就返回原始数据。如果不存在，就返回 空数组 []
 * @param value 数据内容
 * @returns {*|*[]}
 */
function getArrValue(value)
{
    return isArray(value) ? value : [];
}


/**
 * 取对象数据, 如果数据存在，就返回原始数据。如果不存在，就返回 空对象 {}
 * @param value 数据内容
 * @returns {*|{}}
 */
function getObjValue(value)
{
    return isObject(value) ? value : {};
}


/**
 * 取对象数据2, 如果数据存在，返回原始数据。如果不存在，或为空对象时,返回false
 * @param value 数据内容
 * @returns {boolean | {}}
 */
function getObjNullValue(value)
{
    const res = getObjValue(value);
    return isObjNull(res) ? false : res;
}

export { getArrValue, getObjNullValue, getObjType, getObjValue, isArray, isAsyncFunction, isBoolean, isDate, isElement, isFunction, isNullAll, isNumber, isObjNull, isObject, isPromise, isString, isType, isValueNull };
