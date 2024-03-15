let iTimes

/**
 * 防止并发操作，阻止2毫秒内的操作
 * @returns {Promise<unknown>}
 */
export function useClick() {
    return new Promise((resolve) => {
        clearTimeout(iTimes)
        iTimes = setTimeout(() => {
            resolve(true)
        }, 200)
    })
}
