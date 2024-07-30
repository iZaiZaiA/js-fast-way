import { getObjVal } from "./object";

// 文件大小单位常量
const SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB'];
const SIZE_BASES = SIZE_UNITS.map((_, i) => Math.pow(1024, i));

/**
 * 获取文件大小的字符串类型
 * @param {number} size - 文件字节大小
 * @param {boolean} [obj=false] - 是否返回对象
 * @returns {(string|Object)} 格式化后的文件大小
 */
export function filterSize(size, obj = false) {
    if (size === undefined || size === null) {
        return obj ? {size: 0, unit: 'B'} : '0 B';
    }

    let i = 0;
    while (i < SIZE_UNITS.length - 1 && size >= SIZE_BASES[i + 1]) {
        i++;
    }

    const formattedSize = (size / SIZE_BASES[i]).toFixed(2);
    const unit = SIZE_UNITS[i];

    return obj ? {size: formattedSize, unit} : `${formattedSize} ${unit}`;
}

// 求次幂
export function pow1024(num) {
    return Math.pow(1024, num)
}


/**
 * 判断文件大小是否在限制范围内
 * @param {number} byte - 文件字节大小
 * @param {number} size - 文件大小限制（MB）
 * @returns {boolean} 是否在限制范围内
 */
export function isFileSize(byte, size) {
    return byte <= size * 1024 * 1024;
}

/**
 * 获取不带后缀的文件名
 * @param {string} name - 完整文件名
 * @returns {string} 不带后缀的文件名
 */
export function getFileName(name) {
    return name ? name.substring(0, name.lastIndexOf(".")) : '';
}

/**
 * 获取文件后缀名
 * @param {string} name - 完整文件名
 * @returns {string} 文件后缀名
 */
export function getFileSuffix(name) {
    return name ? name.substring(name.lastIndexOf(".") + 1).toLowerCase() : '';
}

/**
 * 获取带后缀的文件名（去除路径）
 * @param {string} name - 完整文件路径
 * @returns {string} 带后缀的文件名
 */
export function getFileNames(name) {
    return name ? name.substring(name.lastIndexOf('/') + 1) : '';
}

/**
 * base64转成文件
 * @param {string} base64 - base64内容
 * @param {string} [type="image/jpeg"] - 文件类型
 * @param {string} [name=Date.now()] - 文件名称
 * @param {string} [suffix="jpg"] - 文件后缀
 * @returns {File} 转换后的文件对象
 */
export function base64ToFile(base64, type = "image/jpeg", name = Date.now(), suffix = "jpg") {
    if (!base64 || base64.indexOf('base64,') === -1) {
        throw new Error('Invalid base64 string');
    }

    const binary = atob(base64.split(",")[1]);
    const array = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        array[i] = binary.charCodeAt(i);
    }
    const fileBlob = new Blob([array], {type: type});
    return new File([fileBlob], `${name}.${suffix}`);
}

/**
 * 从响应头中获取content-disposition
 * @param {Object} headers - 响应头对象
 * @returns {string} content-disposition值
 */
const getDisposition = (headers) => {
    return headers && headers['content-disposition'] ? headers['content-disposition'] : '';
};

/**
 * 解析文件名
 * @param {string} disposition - content-disposition值
 * @returns {string} 解析后的文件名
 */
const parseFileName = (disposition) => {
    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = filenameRegex.exec(disposition);
    if (matches && matches[1]) {
        return decodeURIComponent(matches[1].replace(/['"]/g, ''));
    }
    return 'unknown';
};

/**
 * 新下载文件
 * @param {Object} res - 接口响应的原始数据
 * @param {string} [type=""] - 文件类型
 * @returns {Promise<Object>} 下载结果
 */
export function newDownBlob(res, type = "") {
    return new Promise((resolve) => {
        try {
            const {data, headers} = res;
            const disposition = getDisposition(headers);
            const blob = new Blob([data], { type: type });
            const blobURL = window.URL.createObjectURL(blob);
            const tempLink = document.createElement('a');
            tempLink.style.display = 'none';
            tempLink.href = blobURL;
            const filename = parseFileName(disposition);
            tempLink.setAttribute('download', filename);
            if (typeof tempLink.download === 'undefined') {
                tempLink.setAttribute('target', '_blank');
            }
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
            window.URL.revokeObjectURL(blobURL);
            resolve({status: true, msg: '下载成功'});
        } catch (err) {
            resolve({status: false, msg: err.message});
        }
    });
}

/**
 * 下载文件
 * @param {Blob} data - 文件内容
 * @param {string} disposition - 响应头中的content-disposition
 * @param {string} [type="application/vnd.ms-excel"] - 文件类型
 */
export function downloadBlob(data, disposition = '', type = "application/vnd.ms-excel") {
    const blob = new Blob([data], { type: type });
    const blobURL = window.URL.createObjectURL(blob);
    const tempLink = document.createElement('a');
    tempLink.style.display = 'none';
    tempLink.href = blobURL;
    const filename = parseFileName(disposition);
    tempLink.setAttribute('download', filename);
    if (typeof tempLink.download === 'undefined') {
        tempLink.setAttribute('target', '_blank');
    }
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    window.URL.revokeObjectURL(blobURL);
}

/**
 * 效验文件格式
 * @param {File} file - 文件对象
 * @param {string} accept - 接受的文件格式
 * @returns {boolean} 是否为有效格式
 */
export function isFileFormat(file, accept) {
    const { type: fileType, name } = file;
    const extension = `.${getFileSuffix(name)}`;
    const baseType = fileType.split('/')[0];
    return accept.split(',').some((acceptedType) => {
        acceptedType = acceptedType.trim();
        if (acceptedType.startsWith('.')) {
            return extension === acceptedType;
        }
        if (/\/\*$/.test(acceptedType)) {
            return baseType === acceptedType.replace(/\/\*$/, '');
        }
        if (/^[^/]+\/[^/]+$/.test(acceptedType)) {
            return fileType === acceptedType;
        }
        return false;
    });
}

/**
 * 获取文件类型
 * @param {string} name - 文件名称
 * @param {Object} [typeMap={}] - 自定义类型映射
 * @returns {string} 文件类型
 */
export function getFileType(name, typeMap = {}) {
    const fileType = getFileSuffix(name);
    const defaultTypeMap = {
        image: ['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'],
        video: ['mp4', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv'],
        audio: ['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac'],
        compress: ['zip', 'rar', '7z', 'tar', 'gz'],
        document: ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'pdf', 'txt'],
    };

    const mergedTypeMap = { ...defaultTypeMap, ...getObjVal(typeMap) };

    for (const [type, extensions] of Object.entries(mergedTypeMap)) {
        if (extensions.includes(fileType)) {
            return type;
        }
    }

    return 'other';
}
