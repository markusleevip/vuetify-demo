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
      ['/api']: { //需要代理的路径   例如 '/api'
          target: process.env.VUE_APP_BASE_API, //代理到 目标路径
          changeOrigin: true,          
      }
    },
    
  }, 
}
