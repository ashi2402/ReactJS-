'use strict';
var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, './public');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: [APP_DIR + '/index.jsx',
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.(jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: "./public",
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};