import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { buildConfig } from "./rollup-utils.js";
import yargs from "yargs";

// 使用yargs解析命令行参数
const commandLineParameters = yargs(process.argv.slice(2)).options({
    packagingFormat: {
        type: "string",
        alias: "pkgFormat",
        default: "umd,esm,common"
    },
}).argv;

const packagingFormat = commandLineParameters.packagingFormat.split(",");

export default {
    input: 'packages/index.js',
    output: buildConfig(packagingFormat),
    plugins: [
        json(),
        resolve({
            preferBuiltins: true,
            browser: true
        }),
        commonjs(),
        nodePolyfills(), // 添加 Node.js polyfills 支持
        terser() // 使用新的 @rollup/plugin-terser
    ],
    // 指定需要外部引入的模块
    external: ['fs', 'path'],
    // 添加警告忽略
    onwarn: (warning, warn) => {
        // 忽略特定警告
        if (warning.code === 'CIRCULAR_DEPENDENCY') return;
        warn(warning);
    }
};
