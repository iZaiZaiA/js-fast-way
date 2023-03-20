//判断类型

const toString = Object.prototype.toString;

//判断值是否为某个类型
export function is(val, type)
{
    return toString.call(val) === `[object ${type}]`;
}

//是否为函数
export function isFunction(val)
{
    return is(val, 'Function');
}

//是否为空对象
export function isObjNull(val)
{
    return JSON.stringify(val) === "{}";
}

//是否已定义
export function isDef(val)
{
    return typeof val !== 'undefined';
}

//是否未已定义
export function isUnDef(val)
{
    return !isDef(val);
}

//是否为对象
export function isObject(val)
{
    return val !== null && is(val, 'Object');
}

//是否为时间
export function isDate(val)
{
    return is(val, 'Date');
}

//是否为数值
export function isNumber(val)
{
    return is(val, 'Number');
}

//是否为AsyncFunction
export function isAsyncFunction(val)
{
    return is(val, 'AsyncFunction');
}

//是否为promise
export function isPromise(val)
{
    return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

//是否为字符串
export function isString(val)
{
    return is(val, 'String');
}

//是否为boolean类型
export function isBoolean(val)
{
    return is(val, 'Boolean');
}

//是否为数组
export function isArray(val)
{
    return val && Array.isArray(val);
}

//是否客户端
export function isClient()
{
    return typeof window !== 'undefined';
}

//是否为浏览器
export function isWindow(val)
{
    return typeof window !== 'undefined' && is(val, 'Window');
}

//是否为元素
export function isElement(val)
{
    return isObject(val) && !!val.tagName;
}

//是否为图片节点
export function isImageDom(val)
{
    return val && ['IMAGE', 'IMG','image', 'img'].includes(val.tagName);
}

//是否为null
export function isNull(val)
{
    return val === null;
}

export function isNullAndUnDef(val)
{
    return isUnDef(val) && isNull(val);
}

export function isNullOrUnDef(val)
{
    return isUnDef(val) || isNull(val);
}

export function isNullAll(val)
{
    return typeof val === undefined || val === null || val === '';
}


/**
 * 是否为空，采用ES6，最终效果和 isNullAll 一致
 * @param val 内容
 * @returns {boolean} 是或否
 */
export function isValueNull(val)
{
    return (val??'') === '';
}

//数据类型
export function getObjType(obj)
{
    let toString = Object.prototype.toString;
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

//取数据
export function getArrValue(val)
{
    return isArray(val) ? val : [];
}

//取数据
export function getObjValue(val)
{
    return isObject(val) ? val : {};
}

//取数据
export function getObjNullValue(val)
{
    const res = getObjValue(val);
    return isObjNull(res) ? false : res;
}
