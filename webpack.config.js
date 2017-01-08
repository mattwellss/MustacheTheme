const path = require('path');
const webpack = require('webpack');

const jsPath = path.join(__dirname, 'js');

module.exports = {
    entry: './js/app.js',
    output: {
        filename: 'app.js',
        path: path.join(jsPath, 'built')
    },
    externals: {
        'jquery': 'jQuery'
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin
    ],
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' }
        ]
    },
    devServer: {
        contentBase: jsPath,
        compress: true,
        port: 8000
    }
};