module.exports = {
    title:'ZHANG JI',
    description: '',
    themeConfig: {
        lastUpdated: '上次更新', // string | boolean
        navbar: true,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' },
              { text: 'Group2', items: [
                { text: 'Chinese', link: '/language/chinese/' },
                { text: 'Japanese', link: '/language/japanese/' },
                  ] }
            ]
          },
          { text: 'External', link: 'https://google.com' },
        ],
        sidebar: {
          '/css/': [
            '',     /* /foo/ */
            'css1',  /* /foo/one.html */
            'css2'   /* /foo/two.html */
          ],

          '/javascript/': [
            '',      /* /bar/ */
            'javascript1', /* /bar/three.html */
            'javascript2'   /* /bar/four.html */
          ],

          // fallback
          '/': [
            '',        /* / */
            '/about/', /* /contact.html */
            '/about/test'    /* /about.html */
          ]
        }
        // sidebar: [
        //   {
        //     title: 'CSS',   // 必要的
        //     path: '/css/',      // 可选的, 应该是一个绝对路径
        //     collapsable: true, // 折叠
        //     sidebarDepth: 2,    // 可选的, 默认值是 1
        //     children: [
        //       '/',
        //       '/css/',
        //       '/css/css1'
        //     ]
        //   },
        //   {
        //     title: 'Group 2',
        //     children: [ /* ... */ ]
        //   }
        // ],
  }
};