const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config');
const path = require('path');
module.exports = Object.assign({}, base, {
    mode: 'production',
    // 开发用的
    entry: {
        example: './example.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'doc'),
    },
    plugins: [
        // 将script引入默认的js插入document中,不用手动在index.html写，且文件也不确定。
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'example.html'
        })
    ]
});