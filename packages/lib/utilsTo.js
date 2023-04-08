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
export function toColor(c1, c2, ratio = 0.5)
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
function addLight(color, amount)
{
    const cc = parseInt(color, 16) + amount;
    const c = cc > 255 ? 255 : cc;
    return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
}

/**
 * 设置颜色透明度
 * @param {string} color 要改变的颜色
 * @param {number} amount 透明度
 * @returns {string}
 */
export function toLighten(color, amount= 0.5)
{
    color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color;
    amount = Math.trunc((255 * amount) / 100);
    const r = addLight(color.substring(0, 2), amount);
    const g = addLight(color.substring(2, 4), amount);
    const b = addLight(color.substring(4, 6), amount);
    return `#${r + g + b}`;
}

/**
 * 字符串转数组或JSON
 * @param value   字符串
 * @returns {boolean|any}
 */
export function toParse(value)
{
    try {
        return JSON.parse(value)
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
export function setRowSpace(spacing, type = 'm')
{
    const int = type === 'm' ? -2 : 2;
    if (spacing !== 0) {
        const floor = Math.floor(spacing / int) + (spacing % 2) + 'px';
        return `${type}:${floor}`;
    } else {
        return '';
    }
}


/**
 * 数组转对象
 * @param arr       数组数据
 * @param field     对象键值名
 * @param objName   对象变量
 * @param arrName   数组变量
 * @param children  子级字段名
 * @returns {Promise<void>}
 * @constructor
 */
export async function ArrToOneObj(arr, field, objName = {}, arrName = [], children = 'children')
{
    if (arr && arr.length > 0) {
        for (const item of arr) {
            objName[item[field]] = {}
            arrName.push(item[field])
            for (const key of Object.keys(item)) {
                if (key !== children) {
                    objName[item[field]][key] = item[key]
                }
                if (key === children && item[children] && item[children].length > 0) {
                    await ArrToOneObj(item[children], field, objName, arrName, children)
                }
            }
        }
    }
}


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
