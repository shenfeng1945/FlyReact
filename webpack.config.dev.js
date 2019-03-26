const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
    mode: 'development',
    // 开发用的
    entry: {
        example: './example.tsx'
    },
    plugins: [
        // 将script引入默认的js插入document中,不用手动在index.html写，且文件也不确定。
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
});