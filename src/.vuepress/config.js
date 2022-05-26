const { description } = require('../../package')

module.exports = {
  dest: 'docs',
  base: '/analisis-dar/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Analisis DAR',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Elección de las tecnologías más apropiadas para el desarrollo del proyecto SEGMAFLOT',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'FrontEnd',
        link: '/frontend/',
      },
      {
        text: 'BackEnd',
        link: '/backend/',
      },
      {
        text: 'DataBases',
        link: '/databases/',
      },
      {
        text: 'Documento',
        link: 'https://docs.google.com/document/d/1Q7opU0dZ1RXkC9nRsWvSEih_MDWXrM2wsNY2nqcqt98/edit',
      },
    ],
    sidebar: [
      '/',
      '/frontend/',
      '/backend/',
      '/databases/'
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
