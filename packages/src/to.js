/**
 * Json强转为Form类型
 * @param {Object} obj Json对象
 * @returns {FormData}
 */
export function toFormData(obj) {
    const data = new FormData();
    Object.entries(obj).forEach(([key, value]) => {
        data.append(key, Array.isArray(value) ? value.join(',') : value);
    });
    return data;
}

/**
 * 表单序列化
 * @param {Object} form 表单数据
 * @returns {string}
 */
export function toSerialize(form) {
    return Object.entries(form)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

/**
 * 颜色混合
 * @param {string} c1 颜色1
 * @param {string} c2 颜色2
 * @param {number} ratio 比例
 * @returns {string}
 */
export function toColor(c1, c2, ratio = 0.5) {
    ratio = Math.max(Math.min(Number(ratio), 1), 0);
    const r1 = parseInt(c1.slice(1, 3), 16);
    const g1 = parseInt(c1.slice(3, 5), 16);
    const b1 = parseInt(c1.slice(5, 7), 16);
    const r2 = parseInt(c2.slice(1, 3), 16);
    const g2 = parseInt(c2.slice(3, 5), 16);
    const b2 = parseInt(c2.slice(5, 7), 16);
    const r = Math.round(r1 * (1 - ratio) + r2 * ratio);
    const g = Math.round(g1 * (1 - ratio) + g2 * ratio);
    const b = Math.round(b1 * (1 - ratio) + b2 * ratio);
    return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
}

/**
 * 调整颜色亮度
 * @param {string} color 要改变的颜色
 * @param {number} amount 亮度调整量（0-100）
 * @returns {string}
 */
export function toLighten(color, amount = 50) {
    color = color.replace('#', '');
    amount = Math.max(Math.min(amount, 100), 0);
    const num = parseInt(color, 16);
    const r = Math.min(255, (num >> 16) + amount);
    const g = Math.min(255, ((num >> 8) & 0x00FF) + amount);
    const b = Math.min(255, (num & 0x0000FF) + amount);
    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
}

/**
 * 字符串转数组或JSON
 * @param {string} value 字符串
 * @returns {*}
 */
export function toParse(value) {
    try {
        return JSON.parse(value);
    } catch (e) {
        console.error("解析失败:", e);
        return null;
    }
}

/**
 * 处理栅格间隔
 * @param {number} spacing 间隔
 * @param {string} type margin or padding
 * @returns {string}
 */
export function setRowSpace(spacing, type = 'm') {
    if (spacing === 0) return '';
    const value = type === 'm' ? -spacing / 2 : spacing / 2;
    return `${type}:${Math.floor(value)}px`;
}

/**
 * 数组转对象
 * @param {Array} arr 数组数据
 * @param {string} field 对象键值名
 * @param {Object} objName 对象变量
 * @param {Array} arrName 数组变量
 * @param {string} children 子级字段名
 */
export function ArrToOneObj(arr, field, objName = {}, arrName = [], children = 'children') {
    if (!Array.isArray(arr)) return;
    arr.forEach(item => {
        if (typeof item !== 'object') return;
        objName[item[field]] = { ...item };
        arrName.push(item[field]);
        delete objName[item[field]][children];
        if (Array.isArray(item[children])) {
            ArrToOneObj(item[children], field, objName, arrName, children);
        }
    });
}

/**
 * 金额格式化:保留几位小数，不四舍五入
 * @param {number} price 金额
 * @param {number} decimal 小数点位数 默认2位
 * @returns {string}
 */
export function priceFormat(price, decimal = 2) {
    if (!price) return '0.00';
    const fixedPrice = (Math.floor(price * Math.pow(10, decimal)) / Math.pow(10, decimal)).toFixed(decimal);
    return fixedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * 数字格式化，转化为 K 或 W
 * @param {number} num 数字内容
 * @returns {string}
 */
export function numberFormat(num) {
    if (num >= 10000) return (num / 10000).toFixed(1) + 'W';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

/**
 * 计算两个日期之间的差距
 * @param {number} date1 日期时间1，时间戳格式
 * @param {number} date2 日期时间2，时间戳格式
 * @returns {Object}
 */
export function calcDate(date1, date2) {
    const diff = Math.abs(date2 - date1);
    const days = Math.floor(diff / (24 * 3600 * 1000));
    const hours = Math.floor((diff % (24 * 3600 * 1000)) / (3600 * 1000));
    const minutes = Math.floor((diff % (3600 * 1000)) / (60 * 1000));
    const seconds = Math.floor(diff / 1000);
    return { days, hours, minutes, seconds };
}

/**
 * 根据背景色返回适合的文字颜色
 * @param {string} color 背景颜色
 * @param {Object} config 颜色配置
 * @returns {string}
 */
export function toTextColor(color, config = {}) {
    if (!color) return config.black || '#000000';
    if (color.includes('gradient')) return config.black || '#000000';

    let rgb = color.startsWith('#') ? hexToRgb(color) : parseRgb(color);
    return isLight(rgb) ? config.black || '#000000' : config.white || '#ffffff';
}

/**
 * 判断颜色是否为浅色
 * @param {number[]} rgb RGB颜色值
 * @returns {boolean}
 */
export function isLight(rgb) {
    return (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) > 186;
}

/**
 * 16进制颜色转RGB
 * @param {string} hex 16进制颜色
 * @returns {number[]}
 */
export function set16ToRgb(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }
    const num = parseInt(hex, 16);
    return [num >> 16, (num >> 8) & 255, num & 255];
}

/**
 * 解析RGB颜色字符串
 * @param {string} rgb RGB颜色字符串
 * @returns {number[]}
 */
export function parseRgb(rgb) {
    return rgb.match(/\d+/g).map(Number);
}

/**
 * RGB转换为16进制
 * @param {string} rgb RGB颜色字符串
 * @returns {string}
 */
export function setRgbTo16(rgb) {
    const [r, g, b] = parseRgb(rgb);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

/**
 * 替换URL中的协议为HTTPS
 * @param {string} url URL
 * @returns {string}
 */
export function setUrlHttps(url) {
    return url ? url.replace(/^http:/, 'https:') : url;
}

/**
 * 替换文本中所有的HTTP为HTTPS
 * @param {string} text 文本
 * @returns {string}
 */
export function setAllUrlHttps(text) {
    return text ? text.replace(/http:\/\//g, 'https://') : text;
}

/**
 * 替换URL中的协议为HTTP
 * @param {string} url URL
 * @returns {string}
 */
export function setUrlHttp(url) {
    return url ? url.replace(/^https:/, 'http:') : url;
}

/**
 * 替换文本中所有的HTTPS为HTTP
 * @param {string} text 文本
 * @returns {string}
 */
export function setAllUrlHttp(text) {
    return text ? text.replace(/https:\/\//g, 'http://') : text;
}
