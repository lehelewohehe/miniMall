//导入文件模块
const path = require('path')
//导入webpack模块，插件依赖webpack
const webpack = require('webpack')
//导入缓存html的插件模块
const htmlwebpack = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [ //专门用来配置插件相关的
        new webpack.HotModuleReplacementPlugin(),
        new htmlwebpack({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif)$/, use: ['url-loader?limit=43960']
            },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' } // 处理 字体文件的 loader 
        ]
    },
    resolve: {
        alias: { // 修改 Vue 被导入时候的包的路径
            // "vue$": "vue/dist/vue.js"
        }
    }
}