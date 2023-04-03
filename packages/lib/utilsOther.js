import { toColor } from "./utilsTo";

/**
 * 控制台打印，来自 colorui 作者 - 文晓港
 * @param name  用于区分不同的打印
 * @param tips  打印的提示信息
 * @param data  打印的数据
 * @param micro 第一个名称
 */
export function clog(name, tips, data, micro)
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

