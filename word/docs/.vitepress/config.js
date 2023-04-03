import {defineConfig} from 'vitepress'
const pkg = require('../../../package.json')

export default defineConfig({
    title: "js-fast-way",
    description: "js-fast-way-docs",
    themeConfig: {
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
        },
        //github
        socialLinks: [
            {icon: 'github', link: 'https://github.com/iZaiZaiA/js-fast-way'}
        ],
        //页脚
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present iZaiZaiA'
        }
    }
})
