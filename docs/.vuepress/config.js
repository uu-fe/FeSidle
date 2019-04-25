module.exports = {
    title: 'FeSidle',
    description: 'Learn this lesson and you can walk sideways in the front end ',
    base: '/FeSidle/',
    dest: './dist',
    head: [
        ['link', { rel: 'icon', href: './public/images/logo.png' }]
    ],
    themeConfig: {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'fewalksideways/FeSidle',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项
        
        // 假如文档放在一个特定的分支下：
        docsBranch: 'gh-pages',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        nav: [
            { text: 'Js', link: '/zh-cn/joinus' },
        ],
        // 为以下路由添加侧边栏
        sidebar: ['/'],
        activeHeaderLinks:false,
        //Algolia 搜索
        // algolia: {
        //     apiKey: '<API_KEY>',
        //     indexName: '<INDEX_NAME>'
        //   }
        lastUpdated: '上次提交',


    }
}