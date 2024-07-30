import {isNullES} from "./validate";

/**
 * 生成UUID
 * @returns {string}
 */
export function getUUID() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    } else {
        // 备用方案,生成一个类似UUID的字符串
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

/**
 * 生成UniqueID
 * @returns {string}
 */
export function uniqueId() {
    return Math.random().toString(36).slice(2, 10);
}

const NUM = '0123456789';
const XEU = 'abcdefghijklmnopqrstuvwxyz';
const DEU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * 生成随机字符串,默认为全部类型
 * @param {number} [num=8] 长度
 * @param {string} [type] 类型 默认为全部类型，可传参随机字符池
 * @returns {string}
 */
export function getRandom(num = 8, type = NUM + XEU + DEU) {
    if (num <= 0) return ''
    return Array.from({length: num}, () => type[Math.floor(Math.random() * type.length)]).join('');
}

/**
 * 生成随机数字
 * @param {number} [num=8] 长度
 * @returns {string}
 */
export function getNumber(num = 8) {
    return getRandom(num, NUM);
}

/**
 * 生成随机小写字母
 * @param {number} [num=8] 长度
 * @returns {string}
 */
export function getLowerCase(num = 8) {
    return getRandom(num, XEU);
}

/**
 * 生成随机大写字母
 * @param {number} [num=8] 长度
 * @returns {string}
 */
export function getUpperCase(num = 8) {
    return getRandom(num, DEU);
}

/**
 * 生成随机数字 + 小写字母
 * @param {number} [num=8] 长度
 * @returns {string}
 */
export function getNumberLower(num = 8) {
    return getRandom(num, NUM + XEU);
}

/**
 * 生成随机数字 + 大写字母
 * @param {number} [num=8] 长度
 * @returns {string}
 */
export function getNumberUpper(num = 8) {
    return getRandom(num, NUM + DEU);
}

/**
 * 生成随机小写字母 + 大写字母
 * @param {number} [num=8] 长度
 * @returns {string}
 */
export function getAlphabets(num = 8) {
    return getRandom(num, XEU + DEU);
}

/**
 * 生成范围随机数
 * @param {number} lower 起始数字
 * @param {number} upper 结束数字
 * @returns {number|string}
 */
export function getRandomFrom(lower, upper) {
    if (isNullES(lower) || isNullES(upper)) return ''
    if (lower > upper) {
        [lower, upper] = [upper, lower]; // 交换上下限
    }
    return Math.floor(Math.random() * (upper - lower + 1) + lower);
}
