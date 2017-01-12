const join = require('path').join;
const webpack = require('webpack');

const codePath = join(__dirname, 'mustachetheme');

module.exports = {
    entry: './mustachetheme/app.ts',
    output: {
        filename: 'app.js',
        path: join(codePath, 'built')
    },
    externals: {
        'jquery': 'jQuery'
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin
    ],
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    // devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' }
        ]
    },
    devServer: {
        contentBase: codePath,
        compress: true,
        port: 8000
    }
};