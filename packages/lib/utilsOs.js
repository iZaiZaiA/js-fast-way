import { toColor } from "./utilsTo";

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
    const nameList = localStorage.getItem(`clog_name`);
    if (!nameList) {
        localStorage.setItem(`clog_name`, [name]);
    } else {
        const nameListArr = nameList.split(`,`);
        if (nameListArr.indexOf(name) === -1) {
            nameListArr.push(name);
            localStorage.setItem(`clog_name`, nameListArr.join(`,`));
        }
    }
    // 从本地存储中根据name获取到index
    let index = localStorage.getItem(`clog_${name}_index`);
    // 如果index不存在，说明是第一次打印，那么就将index设置为1
    if (!index) {
        index = 1;
        localStorage.setItem(`clog_${name}_index`, index);
    } else {
        // 如果index存在，说明不是第一次打印，那么就将index转换为数字类型
        index = Number(index) + 1;
        localStorage.setItem(`clog_${name}_index`, index);
    }
    let colorList = localStorage.getItem(`clog_color`);
    if (!colorList) {
        colorList = ['#fbbd08', '#f37b1d', '#e54d42', '#e03997', '#b745cb', '#8044de', '#0081ff', '#37c0fe', '#6eb92b', '#8dc63f', '#8799a3', '#a5673f'];
    } else {
        colorList = colorList.split(`,`);
    }
    let color = localStorage.getItem(`clog_${name}_color`);
    if (!color) {
        color = colorList[0];
        colorList.splice(0, 1);
        localStorage.setItem(`clog_color`, colorList);
        localStorage.setItem(`clog_${name}_color`, color);
    }
    if (typeof data === 'object') {
        data = JSON.parse(JSON.stringify(data));
    }
    if (typeof data === 'undefined') {
        data = ' ';
    }
    console.log(
        `%c ${micro} %c ${name} %c ${tips} `,
        `background: #0081ff; padding: 1px; border-radius: 3px;  color: #fff`,
        `background: ${color}; padding: 1px; border-radius: 3px; margin-left:3px; color: #fff`,
        'background: #35495e; padding: 1px;margin-left:3px; border-radius: 3px;  color: #fff',
        data
    );
}
