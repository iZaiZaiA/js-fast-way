
/**
 * 金额处理:保留几位小数，不四舍五入(关于金额数值的处理用这个方法,以防金额计算出错)
 * @param price     金额
 * @param decimal   小数点位数 默认2位
 * @returns {number|string}
 */
export function priceFormat(price, decimal = 2)
{
    if (price) {
        let price = (price * 100) / 100;
        return parseFloat(price)
            .toFixed(decimal)
            .toString()
            .split('')
            .reverse()
            .join('')
            .replace(/(\d{3})/g, '$1,')
            .replace(/\,$/, '')
            .split('')
            .reverse()
            .join('')
    } else {
        return 0;
    }
}


/**
 * 数字格式化，转化为 K 或 W
 * @param num   数字内容
 * @returns {*|string}
 */
export function numberFormat(num)
{
    if (num > 1000 && num < 10000) {
        return Math.floor(num / 1000) + 'K';
    } else if (num > 10000) {
        return Math.floor(num / 10000) + 'W';
    } else {
        return num;
    }
}


/**
 * 设置剪切板文本
 * @param text  文本内容
 * @returns {Promise<unknown>}
 */
export async function setCopyText(text)
{
    return new Promise((resolve) => {
        if (window.navigator?.clipboard) {
            window.navigator.clipboard.writeText(text).then(() => {
                resolve(true)
            }).catch(() => {
                resolve(false)
            });
        } else {
            resolve(false)
        }
    })
}


/**
 * 取剪切板文本
 * @returns {Promise<unknown>}
 */
export async function getCopyText()
{
    return new Promise((resolve) => {
        if (window.navigator?.clipboard) {
            window.navigator.clipboard.readText().then((text) => {
                resolve(text)
            }).catch(() => {
                resolve(false)
            });
        } else {
            resolve(false)
        }
    })
}


/**
 * 输入框插入内容
 * @param startPos  光标开始位置
 * @param endPos    光标结束位置
 * @param value     输入框内容
 * @param value2    插入内容
 * @returns {*}
 */
export function setPosInsert(startPos, endPos, value, value2)
{
    if (!value) return value2; //输入框无内容时，直接覆盖
    if (value.length === startPos) {
        //光标在最后时，直接追加
        return value + value2
    } else {
        //光标在其它位置时，裁取文本，并拼接
        return value.substring(0, startPos) + value2 + value.substring(endPos, value.length)
    }
}


/**
 * 设置光标位置
 * @param id    输入框ID
 * @param pos   光标位置
 */
export function setPosRange(id, pos)
{
    document.getElementById(id)?.setSelectionRange(pos,pos)
}

