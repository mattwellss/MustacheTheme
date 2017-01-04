const webpack = require('webpack');
module.exports = {
    entry: './js/app.js',
    output: {
        filename: 'app.js',
        path: './js/built'
    },
    externals: {
        'jquery': 'jQuery',
        './templateRegistry': 'templateRegistry'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin
    ]
};