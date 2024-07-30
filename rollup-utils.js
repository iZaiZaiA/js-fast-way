// 处理output对象中的format字段
const buildFormat = formatVal => {
    const formatMap = {
        esm: "es",
        common: "cjs",
        umd: "umd"
    };
    return formatMap[formatVal] || formatVal;
};

// 构建输出配置
const buildConfig = (packagingFormat = []) => {
    return packagingFormat.map(pkgFormat => ({
        name: 'JsFastWay',
        file: `dist/index.${pkgFormat}.js`,
        format: buildFormat(pkgFormat),
        sourcemap: false, // 添加 sourcemap
        exports: 'auto', // 自动检测导出模式
        // 为 UMD 格式添加全局变量名
        ...(pkgFormat === 'umd' ? {name: 'JsFastWay'} : {})
    }));
};

export {buildConfig};
