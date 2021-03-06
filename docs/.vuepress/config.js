module.exports = {
  title: 'tkcloud-ui', // 设置网站标题
  base: '/',
  description: 'tkcloud-ui 组件库', //描述
  dest: './docs/.vuepress/dist',   // 设置输出目录
  port: 2333, //端口
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件文档', link: '/baseComponents/' },
      // { text: '知识库', link: '/knowledge/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'github', link: 'https://github.com/tkoawangzq51/tk-assembly' },
          { text: 'netlify', link: 'https://app.netlify.com/sites/goofy-bartik-1de084/settings/deploys' },
          { text: 'github，npm', link: 'https://github.com/tk-technology/tkcloud-ui' },
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/baseComponents/': [
        {
          title: '可视化组件',
          collapsable: true,
          children: [
            'base/Proportional',
            'base/test2'
          ]
        },
        {
          title: '工具类组件',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '方法类函数',
          collapsable: true,
          children: [
          ]
        }
      ]
    }
  }
}