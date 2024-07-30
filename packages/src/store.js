import { isAllNull, isNullES } from "./validate";
import { calcDate } from "./to";

/**
 * 计算缓存是否过期
 * @param {string} key 缓存名称
 * @param {number} [time=2000] 过期时间，毫秒
 * @returns {boolean} 是否过期
 */
export function getStoreTime(key, time = 2000) {
    const data = getStoreData(key, true);
    if (isNullES(data)) return true;
    const date = calcDate(data.datetime, new Date().getTime());
    if (date.seconds > time) {
        delStoreData(key);
        return true;
    }
    return false;
}

/**
 * 保存缓存
 * @param {string} key 缓存名称
 * @param {*} value 缓存内容
 * @param {boolean} [session=false] session模式
 */
export function setStoreData(key, value, session = false) {
    setStore({ name: key, content: value, session });
}

/**
 * 获取缓存
 * @param {string} key 缓存名称
 * @param {boolean} [debug=false] 是否开启调试模式
 * @param {boolean} [session=false] session模式
 * @returns {*} 缓存内容
 */
export function getStoreData(key, debug = false, session = false) {
    return getStore({ name: key, debug, session });
}

/**
 * 删除缓存
 * @param {string} key 缓存名称
 * @param {boolean} [session=false] session模式
 */
export function delStoreData(key, session = false) {
    removeStore({ name: key, session });
}

/**
 * 获取全部缓存
 * @param {boolean} [session=false] session模式
 * @returns {Array} 缓存列表
 */
export function getAllStore(session = false) {
    const storage = session ? window.sessionStorage : window.localStorage;
    return Object.keys(storage).map(key => ({
        name: key,
        content: getStore({ name: key, session })
    }));
}

/**
 * 获取localStorage或sessionStorage
 * @param {Object} options 选项
 * @param {string} options.name 缓存名称
 * @param {boolean} [options.debug=false] 是否开启调试模式
 * @param {boolean} [options.session=false] session模式
 * @returns {*} 缓存内容
 */
export function getStore({ name, debug = false, session = false }) {
    const storage = session ? window.sessionStorage : window.localStorage;
    let obj = storage.getItem(name);
    if (isAllNull(obj)) return;

    try {
        obj = JSON.parse(obj);
    } catch (e) {
        console.error(`解析缓存数据失败: ${name}`, e);
        return obj;
    }

    if (debug) return obj;

    const { dataType, content } = obj;
    switch (dataType) {
        case 'number': return Number(content);
        case 'boolean': return Boolean(content);
        case 'object': return content;
        default: return content ?? '';
    }
}

/**
 * 存储localStorage或sessionStorage
 * @param {Object} options 选项
 * @param {string} options.name 缓存名称
 * @param {*} options.content 缓存内容
 * @param {boolean} [options.session=false] session模式
 */
export function setStore({ name, content, session = false }) {
    const obj = {
        dataType: typeof content,
        content: content ?? '',
        session,
        datetime: new Date().getTime()
    };
    const storage = session ? window.sessionStorage : window.localStorage;
    try {
        storage.setItem(name, JSON.stringify(obj));
    } catch (e) {
        console.error(`存储数据失败: ${name}`, e);
    }
}

/**
 * 删除localStorage或sessionStorage
 * @param {Object} options 选项
 * @param {string} options.name 缓存名称
 * @param {boolean} [options.session=false] session模式
 */
export function removeStore({ name, session = false }) {
    const storage = session ? window.sessionStorage : window.localStorage;
    storage.removeItem(name);
}

/**
 * 清空缓存
 * @param {boolean} [session=false] session模式
 */
export function clearStore(session = false) {
    const storage = session ? window.sessionStorage : window.localStorage;
    storage.clear();
}

/**
 * 清空全部缓存
 */
export function clearStoreAll() {
    window.sessionStorage.clear();
    window.localStorage.clear();
}
