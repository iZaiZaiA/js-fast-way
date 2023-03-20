(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.JsFastWay = {}));
})(this, (function (exports) { 'use strict';

    //判断类型

    const toString = Object.prototype.toString;

    //判断值是否为某个类型
    function is(val, type)
    {
        return toString.call(val) === `[object ${type}]`;
    }

    //是否为函数
    function isFunction(val)
    {
        return is(val, 'Function');
    }

    //是否为空对象
    function isObjNull(val)
    {
        return JSON.stringify(val) === "{}";
    }

    //是否已定义
    function isDef(val)
    {
        return typeof val !== 'undefined';
    }

    //是否未已定义
    function isUnDef(val)
    {
        return !isDef(val);
    }

    //是否为对象
    function isObject(val)
    {
        return val !== null && is(val, 'Object');
    }

    //是否为时间
    function isDate(val)
    {
        return is(val, 'Date');
    }

    //是否为数值
    function isNumber(val)
    {
        return is(val, 'Number');
    }

    //是否为AsyncFunction
    function isAsyncFunction(val)
    {
        return is(val, 'AsyncFunction');
    }

    //是否为promise
    function isPromise(val)
    {
        return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
    }

    //是否为字符串
    function isString(val)
    {
        return is(val, 'String');
    }

    //是否为boolean类型
    function isBoolean(val)
    {
        return is(val, 'Boolean');
    }

    //是否为数组
    function isArray(val)
    {
        return val && Array.isArray(val);
    }

    //是否客户端
    function isClient()
    {
        return typeof window !== 'undefined';
    }

    //是否为浏览器
    function isWindow(val)
    {
        return typeof window !== 'undefined' && is(val, 'Window');
    }

    //是否为元素
    function isElement(val)
    {
        return isObject(val) && !!val.tagName;
    }

    //是否为图片节点
    function isImageDom(val)
    {
        return val && ['IMAGE', 'IMG','image', 'img'].includes(val.tagName);
    }

    //是否为null
    function isNull(val)
    {
        return val === null;
    }

    function isNullAndUnDef(val)
    {
        return isUnDef(val) && isNull(val);
    }

    function isNullOrUnDef(val)
    {
        return isUnDef(val) || isNull(val);
    }

    function isNullAll(val)
    {
        return typeof val === undefined || val === null || val === '';
    }


    /**
     * 是否为空，采用ES6，最终效果和 isNullAll 一致
     * @param val 内容
     * @returns {boolean} 是或否
     */
    function isValueNull(val)
    {
        return (val??'') === '';
    }

    //数据类型
    function getObjType(obj)
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
    function getArrValue(val)
    {
        return isArray(val) ? val : [];
    }

    //取数据
    function getObjValue(val)
    {
        return isObject(val) ? val : {};
    }

    //取数据
    function getObjNullValue(val)
    {
        const res = getObjValue(val);
        return isObjNull(res) ? false : res;
    }

    exports.getArrValue = getArrValue;
    exports.getObjNullValue = getObjNullValue;
    exports.getObjType = getObjType;
    exports.getObjValue = getObjValue;
    exports.is = is;
    exports.isArray = isArray;
    exports.isAsyncFunction = isAsyncFunction;
    exports.isBoolean = isBoolean;
    exports.isClient = isClient;
    exports.isDate = isDate;
    exports.isDef = isDef;
    exports.isElement = isElement;
    exports.isFunction = isFunction;
    exports.isImageDom = isImageDom;
    exports.isNull = isNull;
    exports.isNullAll = isNullAll;
    exports.isNullAndUnDef = isNullAndUnDef;
    exports.isNullOrUnDef = isNullOrUnDef;
    exports.isNumber = isNumber;
    exports.isObjNull = isObjNull;
    exports.isObject = isObject;
    exports.isPromise = isPromise;
    exports.isString = isString;
    exports.isUnDef = isUnDef;
    exports.isValueNull = isValueNull;
    exports.isWindow = isWindow;

}));
