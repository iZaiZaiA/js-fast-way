import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import { buildConfig } from "./rollup-utils.js";
import yargs from "yargs";

// 使用yargs解析命令行执行时的添加参数
const commandLineParameters = yargs(process.argv.slice(1)).options({
    // 打包格式, 默认为 umd,esm,common 三种格式
    packagingFormat: {
        type: "string",
        alias: "pkgFormat",
        default: "umd,esm,common"
    },
}).argv;

// 需要让rollup忽略的自定义参数
const ignoredWarningsKey = [...Object.keys(commandLineParameters)];
const packagingFormat = commandLineParameters.packagingFormat.split(",");

export default {
    input: 'src/index.js',
    output: buildConfig(packagingFormat),
    plugins: [
        json(),
        resolve(),
        commonjs()
    ]
}
