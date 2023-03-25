import {isValueNull} from "./isType"


/**
 * 强转int型
 * @param val   内容
 * @returns {number}
 */
export function toInt(val)
{
    if (isValueNull(val)) return 0;
    const num = parseInt(val, 0);
    return Number.isNaN(num) ? -1 : num;
}


/**
 * Json强转为Form类型
 * @param obj   Json对象
 * @returns {FormData}
 */
export function toFormData(obj)
{
    const data = new FormData();
    Object.keys(obj).forEach(key => {
        data.append(key, Array.isArray(obj[key]) ? obj[key].join(',') : obj[key]);
    });
    return data;
}


/**
 * 根据逗号联合
 * @param arr   数组
 * @returns {*|string}
 */
export function toJoin(arr)
{
    return arr ? arr.join() : '';
}


/**
 * 根据逗号分隔
 * @param val   内容
 * @returns {string[]|string}
 */
export function toSplit(val)
{
    return val ? String(val).split(',') : '';
}


/**
 * 表单序列化
 * @param form  表单数据
 * @returns {string}
 */
export function toSerialize(form)
{
    let list = [];
    Object.keys(form).forEach(ele => {
        list.push(`${ele}=${form[ele]}`)
    })
    return list.join('&');
}

/**
 * 颜色混合
 * @param c1    颜色1
 * @param c2    颜色2
 * @param ratio 比例
 * @returns {string}
 */
export function toColor(c1, c2, ratio)
{
    ratio = Math.max(Math.min(Number(ratio), 1), 0)
    let r1 = parseInt(c1.substring(1, 3), 16)
    let g1 = parseInt(c1.substring(3, 5), 16)
    let b1 = parseInt(c1.substring(5, 7), 16)
    let r2 = parseInt(c2.substring(1, 3), 16)
    let g2 = parseInt(c2.substring(3, 5), 16)
    let b2 = parseInt(c2.substring(5, 7), 16)
    let r = Math.round(r1 * (1 - ratio) + r2 * ratio)
    let g = Math.round(g1 * (1 - ratio) + g2 * ratio)
    let b = Math.round(b1 * (1 - ratio) + b2 * ratio)
    r = ('0' + (r || 0).toString(16)).slice(-2)
    g = ('0' + (g || 0).toString(16)).slice(-2)
    b = ('0' + (b || 0).toString(16)).slice(-2)
    return '#' + r + g + b
}

/**
 * Sums the passed percentage to the R, G or B of a HEX color
 * @param {string} color The color to change
 * @param {number} amount The amount to change the color by
 * @returns {string} The processed part of the color
 */
export function addLight(color, amount)
{
    const cc = parseInt(color, 16) + amount;
    const c = cc > 255 ? 255 : cc;
    return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
}

/**
 * Lightens a 6 char HEX color according to the passed percentage
 * @param {string} color The color to change
 * @param {number} amount The amount to change the color by
 * @returns {string} The processed color represented as HEX
 */
export function toLighten(color, amount)
{
    color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color;
    amount = Math.trunc((255 * amount) / 100);
    return `#${addLight(color.substring(0, 2), amount)}${addLight(
        color.substring(2, 4),
        amount
    )}${addLight(color.substring(4, 6), amount)}`;
}

/**
 * 字符串转数组或JSON
 * @param val   字符串
 * @returns {boolean|any}
 */
export function toParse(val)
{
    try {
        return JSON.parse(val)
    } catch (e) {
        return false;
    }
}

/**
 * 处理栅格间隔
 * @param spacing   间隔
 * @param type      margin or padding
 * @returns {string}
 */
export function setRowSpace(spacing, type = 'margin')
{
    const val = toInt(spacing);
    const int = type === 'margin' ? -2 : 2;
    if (val !== 0) {
        const floor = Math.floor(val / int) + (val % 2) + 'px';
        return `${type}:${floor}`;
    } else {
        return '';
    }
}
