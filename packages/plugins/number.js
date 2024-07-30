import BigNumber from 'bignumber.js'
import {isNullES, isNumberReg} from "../src";

/**
 * 数字计算
 * @param {string|number} num1 数字1
 * @param {string} type 类型 + - * / =
 * @param {string|number} num2 数字2
 * @returns {number|boolean|string}
 */
export function jfwNum(num1, type, num2)
{
    // 初始校验
    if (isNullES(num1) || isNullES(type) || isNullES(num2)) {
        console.warn('不能传递空参数')
        return false
    }
    // 参数1检查
    if (!isNumberReg(num1)) {
        console.warn(num1, '请不要传递非数字的字符')
        return false
    }
    // 类型检查
    if (['+','-','*','/','='].indexOf(type) === -1) {
        console.warn('类型不能为空，请传递 + - * / =')
        return false
    }
    // 参数2检查
    if (!isNumberReg(num2)) {
        console.warn(num2, '请不要传递非数字的字符')
        return false
    }

    // 处理参数
    const param1 = new BigNumber(num1)
    const param2 = new BigNumber(num2)

    let result;

    switch(type) {
        case '+':
            result = param1.plus(param2);
            break;
        case '-':
            result = param1.minus(param2);
            break;
        case '*':
            result = param1.multipliedBy(param2);
            break;
        case '/':
            // 检查除数是否为零
            if (param2.isZero()) {
                console.warn('除数不能为零');
                return false;
            }
            result = param1.dividedBy(param2);
            break;
        case '=':
            const compareResult = param1.comparedTo(param2);
            return compareResult === 0 ? '等于' : (compareResult > 0 ? '大于' : '小于');
    }

    // 检查结果是否为无穷大或NaN
    if (result.isNaN() || !result.isFinite()) {
        console.warn('计算结果无效');
        return false;
    }

    return result.toNumber();
}

export {BigNumber}
