'use strict';
module.exports = {
    entry: './src/index.jsx',
    output: {
        path: './public',
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.(jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};