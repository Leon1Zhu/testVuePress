/**
 * Created by zhuliang on 2018/4/17.
 */
module.exports = {
  base: '/v-alien-upload/',
  title: 'Hello VuePress',
  description: 'vuepress搭建 vuepress教程',
  port:8888,
  themeConfig: {
    sidebar: [
      '/aaa',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}
