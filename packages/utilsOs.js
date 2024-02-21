import { toColor } from "./utilsTo";
import { getRandom } from "./utilsRandom";
import { setStoreData, getStoreData } from "./utilsStore";
import { Color, Solver, hexToRgb } from "./plugins/color";

/**
 * 获取系统是多少位的
 * @returns {string}
 */
export function getOsBit() {
    const agent = navigator.userAgent.toLowerCase();
    const isMac = /macintosh|mac os x/i.test(navigator.userAgent);
    if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
        return '32'
    }else if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
        return '64'
    }
    if(isMac){
        return 'mac'
    }
}


/**
 * 获取当前浏览器名称和版本
 * @returns {{name: string, version: number}|{name: string, version: string}}
 */
export function getBrowserVersion() {
    // 获取userAgent信息
    const ua = navigator.userAgent.toLowerCase();
    // 判断是否为IE 浏览器，因为IE浏览器有独特的userAgent信息
    if (/msie|trident/.test(ua)) {
        // IE11 及以下版本
        if (/msie \d+/.test(ua)) {
            const ieVersion = parseInt(ua.match(/msie (\d+)/)[1]);
            return {name: 'ie', version: ieVersion};
        } else {
            return {name: 'ie', version: '11'};
        }
    }
    // 判断是否为Edge 浏览器
    else if (/edg\/(\d+)/.test(ua)) {
        const version = parseInt(ua.match(/edg\/(\d+)/)[1]);
        return {name: 'edge', version: version};
    }
    // 判断是否为QQ浏览器
    else if (/qqbrowser\/(\d+)/.test(ua)) {
        const version = parseInt(ua.match(/qqbrowser\/(\d+)/)[1]);
        return {name: 'qq', version: version};
    }
    // 判断是否为夸克浏览器
    else if (/quarkpc\/(\d+)/.test(ua)) {
        const version = parseInt(ua.match(/quarkpc\/(\d+)/)[1]);
        return {name: 'quark', version: version};
    }
    // 判断是否为firefox 浏览器
    else if (/firefox\/(\d+)/.test(ua)) {
        const version = parseInt(ua.match(/firefox\/(\d+)/)[1]);
        return {name: 'firefox', version: version};
    }
    // 判断是否为chrome 浏览器
    else if (/chrome\/(\d+)/.test(ua)) {
        const version = parseInt(ua.match(/chrome\/(\d+)/)[1]);
        return {name: 'chrome', version: version};
    }
    // 判断是否为Safari 浏览器
    else if (/safari\/(\d+)/.test(ua)) {
        const version = parseInt(ua.match(/safari\/(\d+)/)[1]);
        return {name: 'safari', version: version};
    }
}


/**
 * 页面全屏
 * @param type  true为全屏，false为退出全屏
 */
export function fullScreen(type= true){
    try {
        if (type) {
            const el = document.documentElement
            if(el.RequestFullScreen){
                el.RequestFullScreen();
            }
            //兼容火狐
            if(el.mozRequestFullScreen){
                el.mozRequestFullScreen();
            }
            //兼容谷歌等可以webkitRequestFullScreen也可以webkitRequestFullscreen
            if(el.webkitRequestFullScreen){
                el.webkitRequestFullScreen();
            }
            //兼容IE,只能写msRequestFullscreen
            if(el.msRequestFullscreen){
                el.msRequestFullscreen();
            }
        } else {
            if(document.exitFullScreen){
                document.exitFullscreen()
            }
            //兼容火狐
            if(document.mozCancelFullScreen){
                document.mozCancelFullScreen()
            }
            //兼容谷歌等
            if(document.webkitExitFullscreen){
                document.webkitExitFullscreen()
            }
            //兼容IE
            if(document.msExitFullscreen){
                document.msExitFullscreen()
            }
        }
    } catch (e) {
        console.log(e)
    }
}

//新窗口打开链接
export function newWindow(url){
    try {
        const id = getRandom()
        const a = document.createElement('a')
        a.setAttribute('href', url)
        a.setAttribute('target', '_blank')
        a.setAttribute('id', id)
        // 防止反复添加
        if (!document.getElementById(id)) {
            document.body.appendChild(a)
        }
        a.click()
        //移除a标签
        document.body.removeChild(a)
    } catch (e) {
        console.log(e)
        window.open(url, '_blank')
    }
}


/**
 * 动态加载线上js文件
 * @param src   线上js文件地址
 * @param type  js文件类型，默认为 text/javascript
 * @returns {Promise<unknown>}
 */
export async function addOnJs(src, type='text/javascript') {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.type = type
        document.head.appendChild(script)
        script.onload = () => {
            resolve()
        }
    })
}

/**
 * 延迟等待
 * @param timeout   延迟时间，默认1000毫秒
 * @returns {Promise<unknown>}
 */
export async function asyncTime (timeout = 1000) {
    return new Promise(async (resolve) => {
        setTimeout(() => {
            resolve(true)
        }, timeout)
    })
}

/**
 * 防抖函数
 * @param func  要执行的函数
 * @param delay 延迟时间，默认500毫秒
 * @returns {(function(...[*]): void)|*}
 */
export function debounce(func, delay = 500) {
    let timeoutId;
    return function(...args) {
        const context = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}


/**
 * 获取年份列表
 * @param end   结束年份 默认今年
 * @param start 开始年份 默认2000
 * @returns {unknown[]}
 */
export function getYearList(end = '', start = 2000) {
    if (!end) end = new Date().getFullYear()
    return Array.from({ length: end - start }, (_, i) => i + start)
}

/**
 * 获取月份列表
 * @returns {string[]}
 */
export function getMonthList() {
    return Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))
}


/**
 * 设置图片颜色样式，原图需要为黑色，底色建议透明
 * @param id        图片元素ID
 * @param value     十六进制的颜色值
 * @returns {Promise<unknown>}
 */
export function setImageColorStyle(id, value)
{
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
 * 设置图片颜色，原图需要为黑色，底色建议透明
 * @param value 十六进制的颜色值
 * @returns {Promise<unknown>}
 */
export function setImageColor(value) {
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
    try {
        document.getElementById(id)?.setSelectionRange(pos,pos)
    } catch {}
}


/**
 * 设置元素焦点
 * @param id    输入框ID
 */
export function setElementFocus(id)
{
    try {
        document.getElementById(id).focus();
    } catch {}
}


/**
 * 设置饿了么UI的主色调
 * @param color 颜色值，默认为 #1ECC95
 */
export const setElementMainColor = (color = '#1ECC95') => {
    const el = document.documentElement
    el.style.setProperty('--el-color-primary', color)
    // 设置 css 渐变 变量
    const numArr = [3, 5, 7, 8, 9]
    numArr.forEach(item => {
        let amount = 0
        if (item === 3) {
            amount = 0.9
        } else if (item === 5) {
            amount = 0.7
        } else if (item >= 7) {
            amount = amount = (10 - item) / 10
        }
        const val = toColor('#FFFFFF', color, amount)
        el.style.setProperty(`--el-color-primary-light-${item}`, val)
    })
    //生成深主色颜色
    const val = toColor('#000000', color, 0.9)
    el.style.setProperty('--el-color-primary-dark-2', val)
}


/**
 * 控制台打印
 * @param name  名称
 * @param tips  提示
 */
export function ulog(name, tips)
{
    console.log(
        `%c ${name} %c ${tips} %c`,
        'background:#0081ff; padding: 1px; border-radius: 3px 0 0 3px; color: #fff',
        'background:#354855; padding: 1px 5px; border-radius: 0 3px 3px 0; color: #fff; font-weight: bold;',
        'background:transparent'
    )
}


/**
 * 控制台打印，来自 colorui 作者 - 文晓港
 * @param name  用于区分不同的打印
 * @param tips  打印的提示信息
 * @param data  打印的数据
 * @param micro 第一个名称
 */
export function clog(micro, name, tips, data, )
{
    let nameList = getStoreData('clog_name', false, true)
    if (!nameList) {
        setStoreData('clog_name', [name], true)
    } else {
        const nameListArr = nameList.split(`,`);
        if (nameListArr.indexOf(name) === -1) {
            nameListArr.push(name);
            setStoreData('clog_name', nameListArr.join(`,`), true)
        }
    }
    // 从本地存储中根据name获取到index
    let index = getStoreData(`clog_${name}_index`, false, true)
    // 如果index不存在，说明是第一次打印，那么就将index设置为1
    if (!index) {
        index = 1;
    } else {
        // 如果index存在，说明不是第一次打印，那么就将index转换为数字类型
        index = Number(index) + 1;
    }
    setStoreData(`clog_${name}_index`, index, true)
    let colorList = getStoreData('clog_color', false, true)
    if (!colorList) {
        colorList = ['#fbbd08', '#f37b1d', '#e54d42', '#e03997', '#b745cb', '#8044de', '#0081ff', '#37c0fe', '#6eb92b', '#8dc63f', '#8799a3', '#a5673f'];
    } else {
        colorList = colorList.split(`,`);
    }
    let color = getStoreData(`clog_${name}_color`, false, true)
    if (!color) {
        color = colorList[0];
        colorList.splice(0, 1);
        setStoreData('clog_color', colorList, true)
        setStoreData(`clog_${name}_color`, color, true)
    }
    console.log(
        `%c ${micro} %c ${name} %c ${tips} `,
        `background: #0081ff; padding: 1px; border-radius: 3px;  color: #fff`,
        `background: ${color}; padding: 1px; border-radius: 3px; margin-left:3px; color: #fff`,
        'background: #35495e; padding: 1px;margin-left:3px; border-radius: 3px;  color: #fff',
        data
    );
}

