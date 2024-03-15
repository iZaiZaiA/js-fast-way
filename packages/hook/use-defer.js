// 函数接收一个参数，表示监测的最大帧数，这里默认值是 1000
// 如果说你渲染的东西特别多可以传入一个值
export function useDefer(maxFrameCount = 1000) {
    // 然后开始计数
    let frameCount = 0
    const refreshFrameCount = () => {
        requestAnimationFrame(() => {
            // 每一次 requestAnimationFrame 就计数加一
            // 表示当前渲染的帧数变多了一帧
            frameCount++
            // 只要当前帧数小于最大帧数就递归执行
            if (frameCount < maxFrameCount) {
                refreshFrameCount()
            }
        })
    }
    refreshFrameCount()
    // 返回一个函数，接收传递进来的 n
    return function (showInFrameCount) {
        // 判断当前渲染的帧数有没有大于 n
        return frameCount >= showInFrameCount
    }
}
