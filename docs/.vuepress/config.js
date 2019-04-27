module.exports = {
    title: 'FeSidle',
    description: 'Learn this lesson and you can walk sideways in the front end ',
    base: '/FeSidle/',
    dest: './dist',
    head: [
        ['link', { rel: 'icon', href: `/images/logo.png` }]
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
        activeHeaderLinks: false,
        //Algolia 搜索
        // algolia: {
        //     apiKey: '<API_KEY>',
        //     indexName: '<INDEX_NAME>'
        //   }
        lastUpdated: '上次提交',
        '/zh/': {
            label: '简体中文',
            selectText: '选择语言',
            editLinkText: '在 GitHub 上编辑此页',
            lastUpdated: '上次更新',
            nav: [
                {
                    text: 'Js',
                    link: '/zh/js/',
                },
                {
                    text: 'Blog',
                    link: '/zh/blog/'
                },
                {
                    text: '默认主题',
                    link: '/zh/default-theme-config/'
                },
                {
                    text: 'Changelog',
                    link: 'https://github.com/vuejs/vuepress/blob/0.x/CHANGELOG.md'
                },
                {
                    text: '1.x',
                    link: 'https://v1.vuepress.vuejs.org/'
                },
            ],
            sidebar: {
                '/zh/js/': genSidebarConfig('Js')
            }
        }

    }
}
function genSidebarConfig (title) {
    return [
      {
        title,
        collapsable: false,
        children: [
          '',
          'js'
        ]
      }
    ]
  }