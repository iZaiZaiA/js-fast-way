import {getObjVal} from "./utilsObject";

/**
 * 判断文件大小
 * @param byte  文件字节
 * @param size  文件兆数
 * @returns {boolean}
 */
export function isFileSize(byte, size)
{
    let maxSize = size * 1024 * 1024
    return byte <= maxSize;
}


/**
 * 获取文件名
 * @param name  文件名
 * @returns {*|string}
 */
export function getFileName(name)
{
    if (name) {
        return name.substring(0, name.lastIndexOf("."))
    } else {
        return ''
    }
}


/**
 * 获取文件后缀名
 * @param name  文件名
 * @returns {*|string}
 */
export function getFileSuffix(name)
{
    if (name) {
        return name?.substring(name?.lastIndexOf(".") + 1)
    } else {
        return ''
    }
}


/**
 * 获取带后缀的文件名
 * @param name  文件名
 * @returns {*|string}
 */
export function getFileNames(name)
{
    if (name) {
        let num = name.lastIndexOf('/') + 1
        return name.substring(num);
    } else {
        return ''
    }
}

/**
 * base64转成文件
 * @param base64    base64内容
 * @param type      文件类型，默认 image/jpeg
 * @param name      文件名称
 * @param suffix    文件后缀，默认 jpg
 * @returns {File}
 */
export function base64ToFile(base64, type = "image/jpeg", name = Date.now(), suffix = "jpg")
{
    let array = [], binary = atob(base64.split(",")[1]);
    for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    const fileBlob = new Blob([new Uint8Array(array)], {type: type});
    return new File([fileBlob], name + '.' + suffix);
}


/**
 * 下载文件
 * @param data          文件内容
 * @param disposition   接口响应的 headers['content-disposition']
 * @param type          文件类型，默认 application/vnd.ms-excel, 详情可以参阅blob文件类型
 */
export function downloadBlob(data, disposition = '', type = "application/vnd.ms-excel")
{
    let blob = new Blob([data], { type: type });
    // 创建新的URL并指向File对象或者Blob对象的地址
    const blobURL = window.URL.createObjectURL(blob)
    // 创建a标签，用于跳转至下载链接
    const tempLink = document.createElement('a')
    tempLink.style.display = 'none'
    tempLink.href = blobURL
    const filename = disposition.split(';')[1].split('=')[1]
    tempLink.setAttribute('download', decodeURI(filename))
    // 兼容：某些浏览器不支持HTML5的download属性
    if (typeof tempLink.download === 'undefined') {
        tempLink.setAttribute('target', '_blank')
    }
    // 挂载a标签
    document.body.appendChild(tempLink)
    tempLink.click()
    document.body.removeChild(tempLink)
    // 释放blob URL地址
    window.URL.revokeObjectURL(blobURL)
}

/**
 * 效验文件格式
 * @param file      文件
 * @param accept    文件格式
 * @returns {*}
 */
export function isFileFormat(file, accept)
{
    const { fileType, name } = file
    const extension = name.includes('.') ? `.${name.split('.').pop()}` : ''
    const baseType = fileType.replace(/\/.*$/, '')
    return accept.split(',').map((type) => type.trim()).filter((type) => type).some((acceptedType) => {
        if (acceptedType.startsWith('.')) {
            return extension === acceptedType
        }
        if (/\/\*$/.test(acceptedType)) {
            return baseType === acceptedType.replace(/\/\*$/, '')
        }
        if (/^[^/]+\/[^/]+$/.test(acceptedType)) {
            return fileType === acceptedType
        }
        return false
    })
}


/**
 * 获取文件类型
 * @param name      文件名称
 * @param typeMap   自定义类型
 * @returns {string}
 */
export function getFileType(name, typeMap = {})
{
    let type = 'file', fileType = getFileSuffix(name)
    let typeMapObj= getObjVal(typeMap)
    if (!typeMapObj) {
        typeMapObj = {
            image: ['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'],
            video: ['mp4', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv'],
            music: ['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac'],
            zip: ['zip', 'rar', '7z', 'tag', 'gzip'],
            word: ['doc', 'docx'],
            excel: ['xls', 'xlsx'],
            ppt: ['ppt', 'pptx'],
            pdf: ['pdf'],
            text: ['txt'],
        }
    }
    Object.keys(typeMapObj).forEach((_type) => {
        if (typeMapObj[_type].indexOf(fileType.toLowerCase()) > -1) {
            type = _type
        }
    })
    return type
}
