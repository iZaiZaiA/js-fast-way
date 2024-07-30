'use strict';

/**
 * 颜色类，用于处理RGB颜色
 */
export class Color {
    /**
     * 创建一个Color实例
     * @param {number} r - 红色值(0-255)
     * @param {number} g - 绿色值(0-255)
     * @param {number} b - 蓝色值(0-255)
     */
    constructor(r, g, b) {
        this.set(r, g, b);
    }

    /**
     * 返回颜色的RGB字符串表示
     * @returns {string} RGB字符串
     */
    toString() {
        return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`;
    }

    /**
     * 设置颜色的RGB值
     * @param {number} r - 红色值(0-255)
     * @param {number} g - 绿色值(0-255)
     * @param {number} b - 蓝色值(0-255)
     */
    set(r, g, b) {
        this.r = this.clamp(r);
        this.g = this.clamp(g);
        this.b = this.clamp(b);
    }

    /**
     * 应用色相旋转
     * @param {number} angle - 旋转角度
     */
    hueRotate(angle = 0) {
        angle = angle / 180 * Math.PI;
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);

        this.multiply([
            0.213 + cos * 0.787 - sin * 0.213,
            0.715 - cos * 0.715 - sin * 0.715,
            0.072 - cos * 0.072 + sin * 0.928,
            0.213 - cos * 0.213 + sin * 0.143,
            0.715 + cos * 0.285 + sin * 0.140,
            0.072 - cos * 0.072 - sin * 0.283,
            0.213 - cos * 0.213 - sin * 0.787,
            0.715 - cos * 0.715 + sin * 0.715,
            0.072 + cos * 0.928 + sin * 0.072,
        ]);
    }

    /**
     * 应用灰度效果
     * @param {number} value - 灰度值(0-1)
     */
    grayscale(value = 1) {
        this.multiply([
            0.2126 + 0.7874 * (1 - value),
            0.7152 - 0.7152 * (1 - value),
            0.0722 - 0.0722 * (1 - value),
            0.2126 - 0.2126 * (1 - value),
            0.7152 + 0.2848 * (1 - value),
            0.0722 - 0.0722 * (1 - value),
            0.2126 - 0.2126 * (1 - value),
            0.7152 - 0.7152 * (1 - value),
            0.0722 + 0.9278 * (1 - value),
        ]);
    }

    /**
     * 应用棕褐色效果
     * @param {number} value - 棕褐色值(0-1)
     */
    sepia(value = 1) {
        this.multiply([
            0.393 + 0.607 * (1 - value),
            0.769 - 0.769 * (1 - value),
            0.189 - 0.189 * (1 - value),
            0.349 - 0.349 * (1 - value),
            0.686 + 0.314 * (1 - value),
            0.168 - 0.168 * (1 - value),
            0.272 - 0.272 * (1 - value),
            0.534 - 0.534 * (1 - value),
            0.131 + 0.869 * (1 - value),
        ]);
    }

    /**
     * 应用饱和度效果
     * @param {number} value - 饱和度值(0-1)
     */
    saturate(value = 1) {
        this.multiply([
            0.213 + 0.787 * value,
            0.715 - 0.715 * value,
            0.072 - 0.072 * value,
            0.213 - 0.213 * value,
            0.715 + 0.285 * value,
            0.072 - 0.072 * value,
            0.213 - 0.213 * value,
            0.715 - 0.715 * value,
            0.072 + 0.928 * value,
        ]);
    }

    /**
     * 应用矩阵变换
     * @param {number[]} matrix - 3x3变换矩阵
     */
    multiply(matrix) {
        const newR = this.clamp(this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]);
        const newG = this.clamp(this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]);
        const newB = this.clamp(this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]);
        this.r = newR;
        this.g = newG;
        this.b = newB;
    }

    /**
     * 应用亮度效果
     * @param {number} value - 亮度值(0-1)
     */
    brightness(value = 1) {
        this.linear(value);
    }

    /**
     * 应用对比度效果
     * @param {number} value - 对比度值(0-1)
     */
    contrast(value = 1) {
        this.linear(value, -(0.5 * value) + 0.5);
    }

    /**
     * 应用线性变换
     * @param {number} slope - 斜率
     * @param {number} intercept - 截距
     */
    linear(slope = 1, intercept = 0) {
        this.r = this.clamp(this.r * slope + intercept * 255);
        this.g = this.clamp(this.g * slope + intercept * 255);
        this.b = this.clamp(this.b * slope + intercept * 255);
    }

    /**
     * 应用反转效果
     * @param {number} value - 反转值(0-1)
     */
    invert(value = 1) {
        this.r = this.clamp((value + this.r / 255 * (1 - 2 * value)) * 255);
        this.g = this.clamp((value + this.g / 255 * (1 - 2 * value)) * 255);
        this.b = this.clamp((value + this.b / 255 * (1 - 2 * value)) * 255);
    }

    /**
     * 转换为HSL颜色空间
     * @returns {{h: number, s: number, l: number}} HSL值
     */
    hsl() {
        const r = this.r / 255;
        const g = this.g / 255;
        const b = this.b / 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return {
            h: h * 100,
            s: s * 100,
            l: l * 100,
        };
    }

    /**
     * 将颜色值限制在0-255之间
     * @param {number} value - 颜色值
     * @returns {number} 限制后的颜色值
     */
    clamp(value) {
        return Math.max(0, Math.min(255, value));
    }
}

/**
 * 解算器类，用于计算滤镜值
 */
export class Solver {
    /**
     * 创建一个Solver实例
     * @param {Color} target - 目标颜色
     */
    constructor(target) {
        this.target = target;
        this.targetHSL = target.hsl();
        this.reusedColor = new Color(0, 0, 0);
    }

    /**
     * 解算最佳滤镜值
     * @returns {{values: number[], loss: number, filter: string}} 解算结果
     */
    solve() {
        const result = this.solveNarrow(this.solveWide());
        return {
            values: result.values,
            loss: result.loss,
            filter: this.css(result.values),
        };
    }

    /**
     * 宽范围解算
     * @returns {{values: number[], loss: number}} 解算结果
     */
    solveWide() {
        const A = 5;
        const c = 15;
        const a = [60, 180, 18000, 600, 1.2, 1.2];

        let best = { loss: Infinity };
        for (let i = 0; best.loss > 25 && i < 3; i++) {
            const initial = [50, 20, 3750, 50, 100, 100];
            const result = this.spsa(A, a, c, initial, 1000);
            if (result.loss < best.loss) {
                best = result;
            }
        }
        return best;
    }

    /**
     * 窄范围解算
     * @param {Object} wide - 宽范围解算结果
     * @returns {{values: number[], loss: number}} 解算结果
     */
    solveNarrow(wide) {
        const A = wide.loss;
        const c = 2;
        const A1 = A + 1;
        const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
        return this.spsa(A, a, c, wide.values, 500);
    }

    /**
     * SPSA (Simultaneous Perturbation Stochastic Approximation) 算法
     * @param {number} A - 初始步长系数
     * @param {number[]} a - 步长参数
     * @param {number} c - 扰动系数
     * @param {number[]} values - 初始值
     * @param {number} iters - 迭代次数
     * @returns {{values: number[], loss: number}} 优化结果
     */
    spsa(A, a, c, values, iters) {
        const alpha = 1;
        const gamma = 0.16666666666666666;

        let best = null;
        let bestLoss = Infinity;
        const deltas = new Array(6);
        const highArgs = new Array(6);
        const lowArgs = new Array(6);

        for (let k = 0; k < iters; k++) {
            const ck = c / Math.pow(k + 1, gamma);
            for (let i = 0; i < 6; i++) {
                deltas[i] = Math.random() > 0.5 ? 1 : -1;
                highArgs[i] = values[i] + ck * deltas[i];
                lowArgs[i] = values[i] - ck * deltas[i];
            }

            const lossDiff = this.loss(highArgs) - this.loss(lowArgs);
            for (let i = 0; i < 6; i++) {
                const g = lossDiff / (2 * ck) * deltas[i];
                const ak = a[i] / Math.pow(A + k + 1, alpha);
                values[i] = fix(values[i] - ak * g, i);
            }

            const loss = this.loss(values);
            if (loss < bestLoss) {
                best = values.slice(0);
                bestLoss = loss;
            }
        }
        return { values: best, loss: bestLoss };

        function fix(value, idx) {
            let max = 100;
            if (idx === 2 /* saturate */) {
                max = 7500;
            } else if (idx === 4 /* brightness */ || idx === 5 /* contrast */) {
                max = 200;
            }

            if (idx === 3 /* hue-rotate */) {
                if (value > max) {
                    value %= max;
                } else if (value < 0) {
                    value = max + value % max;
                }
            } else if (value < 0) {
                value = 0;
            } else if (value > max) {
                value = max;
            }
            return value;
        }
    }

    /**
     * 计算损失值
     * @param {number[]} filters - 滤镜值数组
     * @returns {number} 损失值
     */
    loss(filters) {
        const color = this.reusedColor;
        color.set(0, 0, 0);

        color.invert(filters[0] / 100);
        color.sepia(filters[1] / 100);
        color.saturate(filters[2] / 100);
        color.hueRotate(filters[3] * 3.6);
        color.brightness(filters[4] / 100);
        color.contrast(filters[5] / 100);

        const colorHSL = color.hsl();
        return (
            Math.abs(color.r - this.target.r) +
            Math.abs(color.g - this.target.g) +
            Math.abs(color.b - this.target.b) +
            Math.abs(colorHSL.h - this.targetHSL.h) +
            Math.abs(colorHSL.s - this.targetHSL.s) +
            Math.abs(colorHSL.l - this.targetHSL.l)
        );
    }

    /**
     * 生成CSS滤镜字符串
     * @param {number[]} filters - 滤镜值数组
     * @returns {string} CSS滤镜字符串
     */
    css(filters) {
        function fmt(idx, multiplier = 1) {
            return Math.round(filters[idx] * multiplier);
        }
        return `invert(${fmt(0)}%) sepia(${fmt(1)}%) saturate(${fmt(2)}%) hue-rotate(${fmt(3, 3.6)}deg) brightness(${fmt(4)}%) contrast(${fmt(5)}%)`;
    }
}

/**
 * 将十六进制颜色转换为RGB数组
 * @param {string} hex - 十六进制颜色字符串
 * @returns {number[]|null} RGB数组或null（如果转换失败）
 */
export function hexToRgb(hex) {
    // 扩展缩写形式 (e.g. "03F") 到完整形式 (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
        return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
        ] : null;
}
