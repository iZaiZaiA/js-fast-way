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


/**
 * 计算两个日期之间的差距
 * @param date1 日期时间1，时间戳格式
 * @param date2 日期时间2，时间戳格式
 * @returns {{leave1: number, hours: number, seconds: number, leave2: number, leave3: number, minutes: number, days: number}}
 */
export function calcDate(date1, date2)
{
    let date3 = date2 - date1;
    let days = Math.floor(date3 / (24 * 3600 * 1000))
    let leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
    let hours = Math.floor(leave1 / (3600 * 1000))
    let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
    let minutes = Math.floor(leave2 / (60 * 1000))
    let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
    let seconds = Math.round(date3 / 1000)
    return {leave1, leave2, leave3, days: days, hours: hours, minutes: minutes, seconds: seconds}
}


/**
 * 根据深浅色背景，返回黑白文字颜色。
 * @param color     颜色值
 * @param config    颜色配置
 * @returns {string|string}
 */
export function toTextColor(color, config = {}){
    //默认颜色
    if(!color) {
        return config.black ?? '#000000';
    }
    //渐变色直接返回中色值
    if(color.search('gradient') !== -1) {
        return config.black ?? '#000000';
    }
    //16进制转换成rgb
    if(color.search('#') !== -1) {
        color = set16ToRgb(color);
    }
    let bgColor = color.replace("rgb(", "").replace("rgba(", "").replace(")", "");
    let bgColorArry = bgColor.split(",");
    //浅色背景就返回深色文字颜色。
    return isLight(bgColorArry) ? config.black ?? '#000000' : config.white ?? '#ffffff';
}


/**
 * 是否浅色
 * @param rgb
 * @returns {boolean}
 */
export function isLight (rgb=[0,0,0]) {
    return (0.213 * rgb[0] + 0.715 * rgb[1] + 0.072 * rgb[2] > 255 / 1.5);
}

/**
 * 16进制转换为RGB
 * @param str
 * @returns {string}
 */
export function set16ToRgb(str){
    let reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
    if(!reg.test(str)) return '';
    let newStr = (str.toLowerCase()).replace(/\#/g,'')
    let len = newStr.length;
    if(len === 3) {
        let t = ''
        for(let i= 0; i < len; i++) {
            t += newStr.slice(i,i+1).concat(newStr.slice(i, i + 1))
        }
        newStr = t
    }
    let arr = []; //将字符串分隔，两个两个的分隔
    for(let i = 0; i < 6; i = i + 2) {
        let s = newStr.slice(i, i + 2)
        arr.push(parseInt("0x" + s))
    }
    return 'rgb(' + arr.join(",")  + ')';
}

/**
 * RGB转换为16进制
 * @param str
 * @returns {string}
 */
export function setRgbTo16(str){
    let reg = /^(rgb|RGB)/;
    if(!reg.test(str)) {
        return;
    }
    let arr = str.slice(4, str.length-1).split(",")
    let color = '#';
    for(let i= 0; i < arr.length; i++) {
        let t = Number(arr[i]).toString(16)
        if(t == "0") {   //如果为“0”的话，需要补0操作,否则只有5位数
            t =  t + "0"
        }
        color += t;
    }
    return color;
}


/**
 * 替换http为https
 * @param str   url
 * @returns {*}
 */
export function setUrlHttps(str){
    if (!str) return str
    return str.replace('http://', 'https://')
}

/**
 * 替换文本中所有的http为https
 * @param str   url
 * @returns {*}
 */
export function setAllUrlHttps(str){
    if (!str) return str
    return str.replace(/http:\/\//g, 'https://')
}

/**
 * 替换https为http
 * @param str   url
 * @returns {*}
 */
export function setUrlHttp(str){
    if (!str) return str
    return str.replace('https://', 'http://')
}

/**
 * 替换文本中所有的https为http
 * @param str   url
 * @returns {*}
 */
export function setAllUrlHttp(str){
    if (!str) return str
    return str.replace(/https:\/\//g, 'http://')
}
