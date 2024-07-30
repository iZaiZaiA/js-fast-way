/**
 * 创建一个延迟渲染检查器
 * @param {number} maxFrameCount - 最大帧数，默认为1000
 * @returns {Function} - 返回一个函数用于检查是否应该渲染
 */
export function useDefer(maxFrameCount = 1000) {
    // 参数验证
    if (typeof maxFrameCount !== 'number' || maxFrameCount <= 0) {
        throw new Error('maxFrameCount必须是一个正数');
    }

    let frameCount = 0;
    let animationFrameId = null;
    let isRunning = true;

    /**
     * 刷新帧计数
     */
    function refreshFrameCount() {
        if (!isRunning) return;

        animationFrameId = requestAnimationFrame(() => {
            if (frameCount < maxFrameCount) {
                frameCount++;
                refreshFrameCount();
            }
        });
    }

    // 开始计数
    refreshFrameCount();

    /**
     * 检查是否应该渲染
     * @param {number} showInFrameCount - 应该在第几帧开始渲染
     * @returns {boolean} - 是否应该渲染
     */
    function deferCheck(showInFrameCount) {
        if (typeof showInFrameCount !== 'number' || showInFrameCount < 0) {
            throw new Error('showInFrameCount必须是一个非负数');
        }
        return frameCount >= showInFrameCount;
    }

    /**
     * 停止计数并清理资源
     */
    function stop() {
        isRunning = false;
        if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    }

    // 返回一个对象，包含检查函数和停止函数
    return {
        deferCheck,
        stop
    };
}
