import {defineConfig} from 'vitepress'
import {chineseSearchOptimize, pagefindPlugin} from 'vitepress-plugin-pagefind'
const pkg = require('../../../package.json')

export default defineConfig({
    //base: '/js-fast-way/',
    lang: 'zh-cn',
    title: "js-fast-way",
    description: "js-fast-way-docs",
    lastUpdated: true,
    themeConfig: {
        outlineTitle: '此页的目录大纲',
        docFooter: {
            prev: '上一章',
            next: '下一章'
        },
        //导航
        nav: [
            {text: '首页', link: '/'},
            {text: '指南', link: '/guide/what-is-jfw'},
            {text: 'API', link: '/api/isType'},
            {text: '文章', link: '/article/array'},
            {
                text: pkg.version,
                items: [
                    {
                        text: '更新日志',
                        link: '/CHANGELOG.md'
                    },
                    {
                        text: '建议反馈',
                        link: 'https://github.com/iZaiZaiA/js-fast-way/issues/new'
                    }
                ]
            }
        ],
        //侧边栏
        sidebar: {
            '/guide/': [
                {
                    text: '介绍',
                    items: [
                        { text: 'js-fast-way ？', link: '/guide/what-is-jfw' },
                        { text: '开始', link: '/guide/getting-started' }
                    ]
                }
            ],
            '/api/': [
                {
                    text: '判断数据类型',
                    link: '/api/isType'
                },
                {
                    text: '验证数据内容',
                    link: '/api/validate'
                },
                {
                    text: '数组的操作',
                    link: '/api/array'
                },
                {
                    text: '对象的操作',
                    link: '/api/object'
                },
                {
                    text: '数据转换处理',
                    link: '/api/to'
                },
                {
                    text: '本地数据缓存',
                    link: '/api/store'
                },
                {
                    text: '生成随机字符',
                    link: '/api/random'
                },
                {
                    text: '文件数据处理',
                    link: '/api/file'
                },
                {
                    text: '系统元素操作',
                    link: '/api/os'
                },
            ],
            '/article/': [
                { text: '数组操作', link: '/article/array' },
                { text: '文本操作', link: '/article/text' }
            ],
        },
        //github
        socialLinks: [
            {icon: 'github', link: 'https://github.com/iZaiZaiA/js-fast-way'}
        ],
        editLink: {
            pattern: 'https://github.com/iZaiZaiA/js-fast-way/edit/word/docs/:path',
            text: '在 GitHub 上编辑此页'
        },
        //页脚
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present iZaiZaiA'
        }
    },
    vite: {
        plugins: [
            pagefindPlugin({
                btnPlaceholder: '搜索',
                placeholder: '搜索文档',
                emptyText: '空空如也',
                heading: '共: {{searchResult}} 条结果',
                customSearchQuery: chineseSearchOptimize
            })
        ],
    },
})
