import areaSet from './area'

/**
 * @description 校验出生日期
 * @param {String} birth 8位出生日期 形如20210601
 * @returns {Boolean} 校验是否通过
 */
const verifyBirthDate = (birth) => {
    // 格式化传入的日期格式为 yyyy-mm-dd
    const serializedBirth = `${birth.slice(0, 4)}-${birth.slice(4, 6)}-${birth.slice(6)}`;
    const birthDate = new Date(serializedBirth);
    const now = new Date();
    const earliestDate = new Date('1900-01-01');  // 设置最早可能的出生日期

    // 检查日期是否有效
    if (isNaN(birthDate.getTime())) return false;

    // 检查日期是否在合理范围内
    if (birthDate > now || birthDate < earliestDate) return false;

    return true;
};

/**
 * @description 校验码字符校验函数
 * @param {String} cardNum 传入的身份证号
 * @returns {Boolean} 校验是否通过
 */
const verifyCheckCode = (cardNum) => {
    // 本体码
    const masterCode = cardNum.slice(0, 17).split("").map(Number);
    // 校验码
    const checkCode = cardNum.slice(17).toLowerCase();
    // 校验因子
    const weightingFactor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    // 校验码换算关系
    const pattern = ['1', '0', 'x', '9', '8', '7', '6', '5', '4', '3', '2'];
    // 各位值与对应校验因子相乘，并求和
    const sum = masterCode.reduce((pre, cur, ix) => pre + cur * weightingFactor[ix], 0);
    // 累加值对11取余
    const val = sum % 11;
    // 能与换算关系对应上则返回true，否则返回false
    return pattern[val] === checkCode;
};

/**
 * @description 身份证号码校验，判断输入的身份证号码是否合法
 * @param {String} cardNum 待校验身份证号码
 * @returns {Boolean} 是否校验通过
 */
export const verifyCardNum = (cardNum = "") => {
    // 对参数进行格式化
    const serializedCardNum = cardNum.toString().trim();

    // 长度校验
    if (serializedCardNum.length !== 18) return false;

    // 严格的正则校验
    if (!/^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[0-9Xx]$/.test(serializedCardNum)) {
        return false;
    }

    // 地址码检验
    const areaCode = Number(serializedCardNum.slice(0, 6));
    if (!areaSet.includes(areaCode)) return false;

    // 出生日期码校验
    const birthCode = serializedCardNum.slice(6, 14);
    if (!verifyBirthDate(birthCode)) return false;

    // 校验码校验
    if (!verifyCheckCode(serializedCardNum)) return false;

    // 所有校验通过后，返回true
    return true;
};
