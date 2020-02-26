// .vuepress/config.js
// this represents the minimal configuration
module.exports = {
  theme: 'cool',
  base: '/',
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-admonition'))
    }
  }
}