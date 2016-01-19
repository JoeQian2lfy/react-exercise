var path = require("path");

module.exports = {
    entry: path.resolve('app/index.js'),
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8000,
        contentBase: "build",
        historyApiFallback: true
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel',
            exclude: /node_modules/
        },{
            test: /\.less/,
            loader: 'style!css?sourceMap!less?sourceMap'
        }]
    },
    babel: {
        sourceMap: true,
        presets: ["react", "es2015", "stage-0"]
    }
};
