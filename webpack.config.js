'use strict';

var webpack = require('webpack'),
	path = require('path'),
	nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    buildPath = path.resolve(__dirname, 'public', 'build');

var config = {
    devtool: 'eval',
    entry: './app/main.js',
    output: {
        path: buildPath,
        filename: 'app.bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: [nodeModulesPath], query: { presets:['es2015', 'react'] } }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = config;