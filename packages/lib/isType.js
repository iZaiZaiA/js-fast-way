//判断类型

const toString = Object.prototype.toString;

/**
 * 判断值是否为某个类型
 * @param value 数据内容
 * @param type 类型，boolean、number、string、function、array、date、regExp、undefined、null、object 等
 * @returns {boolean} 是或否
 */
export function isType(value, type)
{
    return toString.call(value) === `[object ${type}]`;
}


/**
 * 获取对象数据类型
 * @param obj 数据内容
 * @returns {*|string} boolean、number、string、function、array、date、regExp、undefined、null、object、element
 */
export function getObjType(obj)
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
export function isString(value)
{
    return isType(value, 'String');
}


/**
 * 是否为数值(Number)
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
export function isNumber(value)
{
    return isType(value, 'Number');
}


/**
 * 是否为布尔值(Boolean)
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
export function isBoolean(value)
{
    return isType(value, 'Boolean');
}


/**
 * 是否为数组 (Array)
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
export function isArray(value)
{
    return value && Array.isArray(value);
}


/**
 * 是否为对象(Object)
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
export function isObject(value)
{
    return value !== null && isType(value, 'Object');
}


/**
 * 是否为时间(Date)
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
export function isDate(value)
{
    return isType(value, 'Date');
}


/**
 * 是否为方法函数 (Function)
 * @param func 数据内容
 * @returns {boolean} 是或否
 */
export function isFunction(func)
{
    return isType(func, 'Function');
}


/**
 * 是否为 Async Function
 * @param func 数据内容
 * @returns {boolean} 是或否
 */
export function isAsyncFunction(func)
{
    return isType(func, 'AsyncFunction');
}


/**
 * 是否为Promise
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
export function isPromise(value)
{
    return isType(value, 'Promise') && isObject(value) && isFunction(value.then) && isFunction(value.catch);
}


/**
 * 是否为元素（Element）
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
export function isElement(value)
{
    return isObject(value) && !!value.tagName;
}
