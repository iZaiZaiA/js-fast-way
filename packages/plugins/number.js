import BigNumber from 'bignumber.js'
import {isNullES, isNumberReg} from "../src";

/**
 * 数字计算
 * @param num1  数字1
 * @param type  类型 + - * / =
 * @param num2  数字2
 * @returns {number|boolean}
 */
export function jfwNum(num1, type, num2)
{
    //初始校验
    if (isNullES(num1) || isNullES(type) || isNullES(num2)) {
        console.warn('不能传递空参数')
        return false
    }
    //参数1检查
    if (!isNumberReg(num1)) {
        console.warn(num1, '请不要传递非数字的字符')
        return false
    }
    //类型检查
    if (['+','-','*','/','='].indexOf(type) === -1) {
        console.warn('类型不能为空，请传递 + - * / =')
        return false
    }
    //参数2检查
    if (!isNumberReg(num2)) {
        console.warn(num2, '请不要传递非数字的字符')
        return false
    }
    //处理参数
    const param1 = new BigNumber(num1)
    if (type === '+') {
        return param1.plus(num2).toNumber()
    } else if (type === '-') {
        return param1.minus(num2).toNumber()
    } else if (type === '*') {
        return param1.multipliedBy(num2).toNumber()
    } else if (type === '/') {
        const param2 = new BigNumber(num2)
        return param1.dividedBy(param2).toNumber()
    } else if (type === '=') {
        const param2 = new BigNumber(num2)
        const result = param1.comparedTo(param2)
        return result === 1
    }
}

export {BigNumber}
