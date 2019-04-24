const path = require('path')
// loader与plugins区别: loader负责把某种文件格式的内容转换成 webpack 可以支持打包的模块,
// plugin 用于处理更多其他的一些构建任务,模块代码转换的工作由 loader 来处理，除此之外的其他任何工作都可以交由 plugin 来完成。
module.exports = {
    entry: './lib/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        // 库名称
        library: 'flyui',
        // 将代码封装成什么模块定义。umd统一定义amd和commonJS; if define => amd else if=> commonJs else windows
        libraryTarget: 'umd',
        filename: 'index.js'
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { test: /\.svg$/, loader: 'svg-sprite-loader' },
            {
                test: /.s([ac])ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        // 默认扩展的后缀
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
};