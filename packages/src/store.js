import {isAllNull, isNullES} from "./validate"
import {calcDate} from "./to";

/**
 * 计算缓存是否过期
 * @param key   缓存名称
 * @param time  过期时间，毫秒
 */
export function getStoreTime(key, time= 2000)
{
    const data = getStoreData(key, true)
    if (isNullES(data)) return true
    const date = calcDate(data.datetime, new Date().getTime())
    if (date.seconds > time) {
        delStoreData(key)
        return true
    }
    return false
}


/**
 * 保存缓存
 * @param key       缓存名称
 * @param value     缓存内容
 * @param session   session模式， 默认为 false
 */
export function setStoreData(key, value, session = false)
{
    return setStore({
        name: key,
        content: value,
        session: session
    })
}


/**
 * 获取缓存
 * @param key       缓存名称
 * @param debug     是否开启调试模式， 默认为 false
 * @param session   session模式， 默认为 false
 * @returns {boolean|number|string|*}
 */
export function getStoreData(key, debug = false, session = false)
{
    return getStore({
        name: key,
        debug: debug,
        session: session
    })
}


/**
 * 删除缓存
 * @param key       缓存名称
 * @param session   session模式， 默认为 false
 */
export function delStoreData(key, session = false)
{
    return removeStore({
        name: key,
        session: session
    })
}


/**
 * 获取全部缓存
 * @param session    session模式， 默认为 false
 * @returns {*[]}
 */
export function getAllStore(session = false)
{
    let list = [];
    if (session) {
        for (let i = 0; i <= window.sessionStorage.length; i++) {
            list.push({
                name: window.sessionStorage.key(i),
                content: getStore({
                    name: window.sessionStorage.key(i),
                    type: 'session'
                })
            })
        }
    } else {
        for (let i = 0; i <= window.localStorage.length; i++) {
            list.push({
                name: window.localStorage.key(i),
                content: getStore({
                    name: window.localStorage.key(i),
                })
            })
        }
    }
    return list;
}


/**
 * 获取localStorage
 * @param name      缓存名称
 * @param debug     是否开启调试模式， 默认为 false
 * @param session   session模式， 默认为 false
 * @returns {boolean|number|string|*|string}
 */
function getStore({name, debug = false, session = false})
{
    let obj, content;
    if (session) {
        obj = window.sessionStorage.getItem(name);
    } else {
        obj = window.localStorage.getItem(name);
    }
    if (isAllNull(obj)) {
        return;
    }
    try {
        obj = JSON.parse(obj);
    } catch {
        return obj;
    }
    if (debug) {
        return obj;
    }
    if (obj.dataType === 'string') {
        content = obj.content;
    } else if (obj.dataType === 'number') {
        content = Number(obj.content);
    } else if (obj.dataType === 'boolean') {
        content = Boolean(obj.content);
    } else if (obj.dataType === 'object') {
        content = obj.content;
    }
    return content ?? '';
}


/**
 * 存储localStorage
 * @param name      缓存名称
 * @param content   缓存内容
 * @param session   session模式， 默认为 false
 */
function setStore({name, content, session = false})
{
    let obj = {
        dataType: typeof (content),
        content: content ?? '',
        session: session ?? '',
        datetime: new Date().getTime()
    }
    if (session) {
        window.sessionStorage.setItem(name, JSON.stringify(obj));
    } else {
        window.localStorage.setItem(name, JSON.stringify(obj));
    }
}


/**
 * 删除localStorage
 * @param name      缓存名称
 * @param session   session模式， 默认为 false
 */
function removeStore({name, session = false})
{
    if (session) {
        window.sessionStorage.removeItem(name);
    } else {
        window.localStorage.removeItem(name);
    }
}


/**
 * 清空缓存
 * @param session   session模式， 默认为 false
 */
export function clearStore(session = false)
{
    if (session) {
        window.sessionStorage.clear();
    } else {
        window.localStorage.clear()
    }
}


/**
 * 清空全部缓存
 */
export function clearStoreAll()
{
    window.sessionStorage.clear();
    window.localStorage.clear()
}
