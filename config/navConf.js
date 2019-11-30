module.exports = [
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
];