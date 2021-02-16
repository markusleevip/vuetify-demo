'use strict'

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 8088,
    proxy: {
      // 把key的路径代理到target位置
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: { //需要代理的路径   例如 '/api'
          target: `http://127.0.0.1:8001`, //代理到 目标路径
          changeOrigin: true,
          pathRewrite: { // 修改路径数据
              ['^' + process.env.VUE_APP_BASE_API ]: '' // 举例 '^/api:""' 把路径中的/api字符串删除
          }
      }
    },
    
  }, 
}
