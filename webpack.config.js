var path = require("path");


module.exports = {
    entry: path.resolve('app/main.js'),
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
    modele: {
        loaders: [{
            test: /\.jsx?$/, //匹配js或jsx
            loader: "babel"
        }]
    }
};
