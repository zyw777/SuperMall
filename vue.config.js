module.exports = {
  configureWebpack:{
    resolve:{
      // 配置文件路径别名
      alias: {
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  },
  publicPath: '/'
 }