import { verifyCardNum } from "../plugins/verify";
import { isArray, isObject } from "./type";

/**
 * 验证网址是否合法
 * @param {string} value 网址
 * @returns {boolean} 是否合法
 */
export function isUrl(value) {
    if (typeof value !== 'string') return false;
    const reg = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return reg.test(value);
}

/**
 * 验证邮箱地址是否合法
 * @param {string} value 邮箱地址
 * @returns {boolean} 是否合法
 */
export function isEmail(value) {
    if (typeof value !== 'string') return false;
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
}

/**
 * 验证手机号码是否合法（中国大陆）
 * @param {string} value 手机号
 * @returns {boolean} 是否合法
 */
export function isPhone(value) {
    if (typeof value !== 'string') return false;
    return /^1[3-9]\d{9}$/.test(value);
}

/**
 * 是否为小写字母
 * @param {string} value 内容
 * @returns {boolean} 是否为小写字母
 */
export function isLowerCase(value) {
    if (typeof value !== 'string') return false;
    return /^[a-z]+$/.test(value);
}

/**
 * 是否为大写字母
 * @param {string} value 内容
 * @returns {boolean} 是否为大写字母
 */
export function isUpperCase(value) {
    if (typeof value !== 'string') return false;
    return /^[A-Z]+$/.test(value);
}

/**
 * 是否为大小写字母
 * @param {string} value 内容
 * @returns {boolean} 是否为大小写字母
 */
export function isAlphabets(value) {
    if (typeof value !== 'string') return false;
    return /^[A-Za-z]+$/.test(value);
}

/**
 * 验证身份证号码
 * @param {string} value 身份证号码
 * @returns {boolean} 是否合法
 */
export function isIdCard(value) {
    if (typeof value !== 'string') return false;
    return verifyCardNum(value);
}

/**
 * 判断中文姓名是否正确
 * @param {string} value 姓名
 * @returns {boolean} 是否合法
 */
export function isName(value) {
    if (typeof value !== 'string') return false;
    return /^[\u4e00-\u9fa5]{2,4}$/.test(value);
}

/**
 * 判断是否为整数
 * @param {string|number} value 内容
 * @returns {boolean} 是否为整数
 */
export function isNum(value) {
    return /^-?\d+$/.test(String(value));
}

/**
 * 判断是否为小数
 * @param {string|number} value 内容
 * @returns {boolean} 是否为小数
 */
export function isNumord(value) {
    return /^-?\d+(\.\d+)?$/.test(String(value));
}

/**
 * 是否为空，undefined、null、空字符串时，返回true
 * @param {*} value 数据内容
 * @returns {boolean} 是否为空
 */
export function isValueNull(value) {
    return value === undefined || value === null || value === '';
}

/**
 * 是否为空，采用ES6空值合并运算符
 * @param {*} value 数据内容
 * @returns {boolean} 是否为空
 */
export function isNullES(value) {
    return (value ?? '') === '';
}

/**
 * 判断是否为空（包括对象和数组）
 * @param {*} value 数据内容
 * @returns {boolean} 是否为空
 */
export function isAllNull(value) {
    if (isNullES(value)) {
        return true;
    } else if (isObject(value)) {
        return Object.keys(value).length === 0;
    } else if (isArray(value)) {
        return value.length === 0;
    } else {
        return false;
    }
}

/**
 * 判断对象是否为空
 * @param {*} value 数据内容
 * @returns {boolean} 是否为空
 */
export function isObjNull(value) {
    return !isObject(value) || Object.keys(value).length === 0;
}

/**
 * 判断数组是否为空
 * @param {*} arr 数据内容
 * @returns {boolean} 是否为空
 */
export function isArrNull(arr) {
    return !isArray(arr) || arr.length === 0;
}

/**
 * 效验是否为数字或小数
 * @param {string|number} text 字符串内容
 * @param {boolean} [allowNegative=true] 是否允许负数
 * @returns {boolean} 是否为数字或小数
 */
export function isNumberReg(text, allowNegative = true) {
    const pattern = allowNegative ? /^-?\d+(\.\d+)?$/ : /^\d+(\.\d+)?$/;
    return pattern.test(String(text));
}

/**
 * 饿了么UI的表单验证
 * @param {Object} formRef 表单ref
 * @returns {Promise<boolean>} 验证结果
 */
export async function formValidate(formRef) {
    if (!formRef || typeof formRef.validate !== 'function') {
        throw new Error('无效的表单校验');
    }
    return new Promise((resolve) => {
        formRef.validate((valid) => {
            resolve(!!valid);
        });
    });
}
