import {verifyCardNum} from "../plugins/verify";
import {isArray, isObject} from "./type";

/**
 * 验证网址是否合法
 * @param value 网址
 * @returns {boolean}
 */
export function isUrl(value)
{
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return reg.test(value)
}

/**
 * 验证邮箱地址是否合法
 * @param value 邮箱地址
 * @returns {boolean}
 */
export function isEmail(value)
{
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(value)
}

/**
 * 简单的验证手机号码
 * @param value 手机号
 * @returns {boolean}
 */
export function isPhone(value)
{
    return /^1[0-9]{10}$/.test(value)
}

/**
 * 是否为小写字母
 * @param value 内容
 * @returns {boolean}
 */
export function isLowerCase(value)
{
    const reg = /^[a-z]+$/
    return reg.test(value)
}

/**
 * 是否为大写字母
 * @param value 内容
 * @returns {boolean}
 */
export function isUpperCase(value)
{
    const reg = /^[A-Z]+$/
    return reg.test(value)
}

/**
 * 是否为大小写字母
 * @param value
 * @returns {boolean}
 */
export function isAlphabets(value)
{
    const reg = /^[A-Za-z]+$/
    return reg.test(value)
}

/**
 * 验证身份证号码
 * @param value 身份证号码
 * @returns {Boolean}
 */
export function isIdCard(value)
{
    return verifyCardNum(value)
}

/**
 * 判断用户名是否正确
 * @param value 内容
 * @returns {boolean}
 */
export function isName(value)
{
    let regName = /^[\u4e00-\u9fa5]{2,4}$/;
    return regName.test(value);
}

/**
 * 判断是否为整数
 * @param value 内容
 * @returns {boolean}
 */
export function isNum(value) {
    let regName = /[^\d]/g;
    return regName.test(value);
}

/**
 * 判断是否为小数
 * @param value 内容
 * @returns {boolean}
 */
export function isNumord(value)
{
    let regName = /[^\d.]/g;
    return regName.test(value);
}


/**
 * 是否为空，undefined、null、空字符串时，返回true
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
export function isValueNull(value)
{
    return typeof value === undefined || value === null || value === '';
}

/**
 * 是否为空，采用ES6，最终效果和 isNullAll 一致
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
export function isNullES(value)
{
    return (value??'') === '';
}


/**
 * 判断是否为空
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
export function isAllNull(value)
{
    if (isNullES(value)) {
        return true;
    } else if (isObject(value)) {
        return JSON.stringify(value) === "{}";
    } else if (isArray(value)) {
        return value.length <= 0;
    } else {
        return false;
    }
}


/**
 * 判断对象是否为空
 * @param value 数据内容
 * @returns {boolean} 是或否
 */
export function isObjNull(value)
{
    if (isObject(value)) {
        return JSON.stringify(value) === "{}";
    } else {
        return true //返回true，定义为空
    }
}


/**
 * 判断数组是否为空
 * @param arr 数据内容
 * @returns {boolean} 是或否
 */
export function isArrNull(arr)
{
    if (isArray(arr)) {
        return arr.length <= 0;
    } else {
        return true //返回true，定义为空
    }
}


/**
 * 效验是否为数字或小数的数字
 * @param text  字符串内容
 * @param lose  是否允许负数，默认允许
 * @returns {boolean}
 */
export function isNumberReg(text, lose = true)
{
    let pattern = lose ? /^-?\d+(.\d+)?$/ : /^\d+(.\d+)?$/
    return pattern.test(text)
}


/**
 * 饿了么UI的表单验证
 * @param formRef 表单ref
 * @returns
 */
export async function formValidate(formRef)
{
    return new Promise( (resolve) => {
        formRef.validate((valid) => {
            resolve(!!valid)
        })
    });
}
