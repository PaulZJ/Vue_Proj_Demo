'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/v1': {
        // 测试环境
        target: 'http://localhost:7889',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
            '^/v1': '/v1'   //需要rewrite重写的,
        }
      },
      '/v2': {
        // 测试环境
        target: 'http://localhost:7889',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
            '^/v2': '/v2'   //需要rewrite重写的,
        }
      },
      '/v3': {
        // 测试环境
        target: 'http://localhost:7889',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
            '^/v3': '/v3'   //需要rewrite重写的,
        }
      },
      '/promotion/v2/users': {
        // 测试环境
        target: 'http://localhost:7889',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '/promotion/v2/users': '/promotion/v2/users'
        }
      },
      '/bos/v2/users': {
        // 测试环境
        target: 'http://localhost:7889',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '/bos/v2/users': '/bos/v2/users'
        }
      },
      '/payapi/payment': {
        //测试环境
        target: 'http;//localhost:7889',
        changeOrigin: true,
        pathRewrite: {
          '/payapi/payment': '/payapi/payment'
        }
      },
      '/ugc/v2': {
        //测试环境
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '/ugc/v2': '/ugc/v2'
        }
      },
      '/shopping': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/shopping': '/shopping'
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8099, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
