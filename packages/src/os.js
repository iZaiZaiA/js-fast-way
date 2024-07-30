import { toColor } from "./to";
import { getRandom } from "./random";
import { setStoreData, getStoreData } from "./store";
import { Color, Solver, hexToRgb } from "../plugins/color";

/**
 * 获取系统位数
 * @returns {string} 系统位数
 */
export function getOsBit() {
    const agent = navigator.userAgent.toLowerCase();
    const isMac = /macintosh|mac os x/i.test(navigator.userAgent);
    if (agent.includes("win32") || agent.includes("wow32")) {
        return '32';
    } else if (agent.includes("win64") || agent.includes("wow64")) {
        return '64';
    }
    return isMac ? 'mac' : 'unknown';
}

/**
 * 获取当前浏览器名称和版本
 * @returns {{name: string, version: number|string}}
 */
export function getBrowserVersion() {
    const ua = navigator.userAgent.toLowerCase();
    const browserInfo = [
        { name: 'ie', regex: /msie (\d+)|trident/ },
        { name: 'edge', regex: /edg\/(\d+)/ },
        { name: 'qq', regex: /qqbrowser\/(\d+)/ },
        { name: 'quark', regex: /quarkpc\/(\d+)/ },
        { name: 'firefox', regex: /firefox\/(\d+)/ },
        { name: 'chrome', regex: /chrome\/(\d+)/ },
        { name: 'safari', regex: /safari\/(\d+)/ }
    ];

    for (const browser of browserInfo) {
        const match = ua.match(browser.regex);
        if (match) {
            return {
                name: browser.name,
                version: browser.name === 'ie' && !match[1] ? '11' : parseInt(match[1])
            };
        }
    }

    return { name: 'unknown', version: 'unknown' };
}

/**
 * 页面全屏
 * @param {boolean} [type=true] true为全屏，false为退出全屏
 */
export function fullScreen(type = true) {
    const elem = document.documentElement;
    try {
        if (type) {
            const requestFullScreen = elem.requestFullscreen || elem.mozRequestFullScreen ||
                elem.webkitRequestFullScreen || elem.msRequestFullscreen;
            requestFullScreen.call(elem);
        } else {
            const exitFullScreen = document.exitFullscreen || document.mozCancelFullScreen ||
                document.webkitExitFullscreen || document.msExitFullscreen;
            exitFullScreen.call(document);
        }
    } catch (e) {
        console.error("全屏操作失败:", e);
    }
}

/**
 * 新窗口打开链接
 * @param {string} url 要打开的URL
 */
export function newWindow(url) {
    try {
        const id = getRandom();
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.id = id;
        if (!document.getElementById(id)) {
            document.body.appendChild(a);
        }
        a.click();
        document.body.removeChild(a);
    } catch (e) {
        console.error("打开新窗口失败:", e);
        window.open(url, '_blank');
    }
}

/**
 * 动态加载线上js文件
 * @param {string} src js文件地址
 * @param {string} [type='text/javascript'] js文件类型
 * @returns {Promise<void>}
 */
export function addOnJs(src, type = 'text/javascript') {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.type = type;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

/**
 * 延迟等待
 * @param {number} [timeout=1000] 延迟时间（毫秒）
 * @returns {Promise<boolean>}
 */
export function asyncTime(timeout = 1000) {
    return new Promise(resolve => setTimeout(() => resolve(true), timeout));
}

/**
 * 获取年份列表
 * @param {number} [end] 结束年份（默认今年）
 * @param {number} [start=2000] 开始年份
 * @returns {number[]}
 */
export function getYearList(end = new Date().getFullYear(), start = 2000) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

/**
 * 获取月份列表
 * @returns {string[]}
 */
export function getMonthList() {
    return Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
}

/**
 * 设置图片颜色样式
 * @param {string} id 图片元素ID
 * @param {string} value 十六进制的颜色值
 * @returns {Promise<boolean>}
 */
export async function setImageColorStyle(id, value) {
    return new Promise((resolve) => {
        setImageColor(value).then(({result}) => {
            try {
                document.getElementById(id).style.filter = result.filter;
                resolve(true)
            } catch {
                resolve(false)
            }
        }).catch(() => {
            resolve(false)
        })
    })
}

/**
 * 设置图片颜色
 * @param {string} value 十六进制的颜色值
 * @returns {Promise<{rgb: number[], color: Color, result: Object}>}
 */
export async function setImageColor(value) {
    return new Promise((resolve) => {
        const rgb = hexToRgb(value);
        const color = new Color(rgb[0], rgb[1], rgb[2]);
        const solver = new Solver(color);
        const result = solver.solve();
        resolve({rgb, color, result})
    })
}

/**
 * 设置剪切板文本
 * @param {string} text 文本内容
 * @returns {Promise<boolean>}
 */
export async function setCopyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (e) {
        console.error("设置剪切板文本失败:", e);
        return false;
    }
}

/**
 * 获取剪切板文本
 * @returns {Promise<string|boolean>}
 */
export async function getCopyText() {
    try {
        return await navigator.clipboard.readText();
    } catch (e) {
        console.error("获取剪切板文本失败:", e);
        return false;
    }
}

/**
 * 输入框插入内容
 * @param {number} startPos 光标开始位置
 * @param {number} endPos 光标结束位置
 * @param {string} value 输入框内容
 * @param {string} value2 插入内容
 * @returns {string}
 */
export function setPosInsert(startPos, endPos, value, value2) {
    if (!value) return value2;
    if (value.length === startPos) return value + value2;
    return value.slice(0, startPos) + value2 + value.slice(endPos);
}

/**
 * 设置光标位置
 * @param {string} id 输入框ID
 * @param {number} pos 光标位置
 */
export function setPosRange(id, pos) {
    try {
        document.getElementById(id)?.setSelectionRange(pos, pos);
    } catch (e) {
        console.error("设置光标位置失败:", e);
    }
}

/**
 * 设置元素焦点
 * @param {string} id 输入框ID
 */
export function setElementFocus(id) {
    try {
        document.getElementById(id)?.focus();
    } catch (e) {
        console.error("设置元素焦点失败:", e);
    }
}

/**
 * 设置饿了么UI的主色调
 * @param {string} [color='#1ECC95'] 颜色值
 */
export const setElementMainColor = (color = '#1ECC95') => {
    const el = document.documentElement;
    el.style.setProperty('--el-color-primary', color);
    [3, 5, 7, 8, 9].forEach(item => {
        const amount = item === 3 ? 0.9 : item === 5 ? 0.7 : (10 - item) / 10;
        const val = toColor('#FFFFFF', color, amount);
        el.style.setProperty(`--el-color-primary-light-${item}`, val);
    });
    const darkVal = toColor('#000000', color, 0.9);
    el.style.setProperty('--el-color-primary-dark-2', darkVal);
};

/**
 * 控制台打印
 * @param {string} name 名称
 * @param {string} tips 提示
 */
export function ulog(name, tips) {
    console.log(
        `%c ${name} %c ${tips} %c`,
        'background:#0081ff; padding: 1px; border-radius: 3px 0 0 3px; color: #fff',
        'background:#354855; padding: 1px 5px; border-radius: 0 3px 3px 0; color: #fff; font-weight: bold;',
        'background:transparent'
    );
}

/**
 * 控制台打印，来自 colorui 作者 - 文晓港
 * @param {string} micro 第一个名称
 * @param {string} name 用于区分不同的打印
 * @param {string} tips 打印的提示信息
 * @param {*} data 打印的数据
 */
export function clog(micro, name, tips, data) {
    let nameList = getStoreData('clog_name', false, true) || '';
    const nameListArr = nameList ? nameList.split(',') : [];
    if (!nameListArr.includes(name)) {
        nameListArr.push(name);
        setStoreData('clog_name', nameListArr.join(','), true);
    }

    let index = Number(getStoreData(`clog_${name}_index`, false, true) || 0) + 1;
    setStoreData(`clog_${name}_index`, index, true);

    let colorList = getStoreData('clog_color', false, true)?.split(',') ||
        ['#fbbd08', '#f37b1d', '#e54d42', '#e03997', '#b745cb', '#8044de', '#0081ff', '#37c0fe', '#6eb92b', '#8dc63f', '#8799a3', '#a5673f'];

    let color = getStoreData(`clog_${name}_color`, false, true);
    if (!color) {
        color = colorList.shift() || '#000000';
        setStoreData('clog_color', colorList.join(','), true);
        setStoreData(`clog_${name}_color`, color, true);
    }

    console.log(
        `%c ${micro} %c ${name} %c ${tips} `,
        `background: #0081ff; padding: 1px; border-radius: 3px; color: #fff`,
        `background: ${color}; padding: 1px; border-radius: 3px; margin-left:3px; color: #fff`,
        'background: #35495e; padding: 1px; margin-left:3px; border-radius: 3px; color: #fff',
        data
    );
}
