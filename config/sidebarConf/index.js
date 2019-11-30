const  css = require('../../config/sidebarConf/css/index');
const  javascript = require('../../config/sidebarConf/javascript/index');

module.exports = {
    '/css/':css,

    '/javascript/': javascript,

    // fallback
    '/': [
      '',        /* / */
      '/about/', /* /contact.html */
      '/about/test'    /* /about.html */
    ]
};