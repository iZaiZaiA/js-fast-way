
/**
 * 生成UUID
 * @returns {string}
 */
export function getUUID()
{
    return crypto.randomUUID();
}


/**
 * UniqueID
 * @returns {string}
 */
export function uniqueId()
{
    return Math.random().toString(36).slice(8);
}

const NUM = '0123456789';
const XEU = 'abcdefghijklmnopqrstuvwxyz';
const DEU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


/**
 * 生成随机字符串,默认为全部类型
 * @param num   长度 默认为8
 * @param type  类型 默认为全部类型，可传参随机字符池
 * @returns {string}
 */
export function getRandom(num= 8, type)
{
    if (!type) type = NUM + XEU + DEU
    let maxPos = type.length, value = '';
    for (let i = 0; i < num; i++) {
        value += type.charAt(Math.floor(Math.random() * maxPos));
    }
    return value;
}


/**
 * 生成随机数字
 * @param num   长度
 * @returns {string}
 */
export function getNumber(num = 8)
{
    return getRandom(num, NUM);
}


/**
 * 生成随机小写字母
 * @param num   长度
 * @returns {string}
 */
export function getLowerCase(num = 8)
{
    return getRandom(num, XEU);
}


/**
 * 生成随机大写字母
 * @param num   长度
 * @returns {string}
 */
export function getUpperCase(num = 8)
{
    return getRandom(num, DEU);
}


/**
 * 生成随机数字+ 小写字母
 * @param num   长度
 * @returns {string}
 */
export function getNumberLower(num = 8)
{
    return getRandom(num, NUM + XEU);
}


/**
 * 生成随机数字 + 大写字母
 * @param num   长度
 * @returns {string}
 */
export function getNumberUpper(num = 8)
{
    return getRandom(num, NUM + DEU);
}

/**
 * 生成随机小写字母 + 大写字母
 * @param num   长度
 * @returns {string}
 */
export function getAlphabets(num = 8)
{
    return getRandom(num, XEU + DEU);
}


/**
 * 生成范围随机数
 * @param upper 起始数字
 * @param lower 结束数字
 * @returns {number}
 */
export function getRandomFrom(upper,lower)
{
    return Math.floor(Math.random() * (upper - lower + 1) + lower);
}
