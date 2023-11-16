// 处理output对象中的format字段(传入的参数会与rollup所定义的参数不符，因此需要在这里进行转换)
const buildFormat = formatVal => {
    let finalFormatVal = formatVal;
    switch (formatVal) {
        case "esm":
            finalFormatVal = "es";
            break;
        case "common":
            finalFormatVal = "cjs";
            break;
        default:
            break;
    }
    return finalFormatVal;
};

const buildConfig = (packagingFormat = []) => {
    const outputConfig = [];
    for (let i = 0; i < packagingFormat.length; i++) {
        const pkgFormat = packagingFormat[i];
        // 根据packagingFormat字段来构建对应格式的包
        const config = {
            name: 'JsFastWay',
            file: `dist/index.${pkgFormat}.js`,
            format: buildFormat(pkgFormat),
        };
        outputConfig.push(config);
    }
    return outputConfig;
};

export {buildConfig};
