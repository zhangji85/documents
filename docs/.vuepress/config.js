const pluginConf = require('../../config/pluginConf');
const navConf = require('../../config/navConf');
const sidebarConf = require('../../config/sidebarConf/index.js');


module.exports = {
    title:'ZHANG JI',
    description: 'Zhangji Blog',
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      },
    },
    head: [
      ['link', { rel: 'icon', href: '/zj.jpg' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    plugins: pluginConf,
    // base:'/documents/',
    themeConfig: {
      lastUpdated: '上次更新', // string | boolean
      repo: 'zhangji85/documents',
      editLinks: true,
      editLinkText: '编辑',
      docsDir: 'docs',
      navbar: true,
      nav: navConf,
      sidebar: sidebarConf,
  }
};