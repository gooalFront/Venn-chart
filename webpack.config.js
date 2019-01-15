const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        venn: './src/index.js',
        test: './src/test.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'docs')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
            hash: true,
            minify: {
                removeAttributeQuotes: true
            }
        }),
        new cleanWebpackPlugin(
            ['dist/*.js','dist/*.map','dist/*.html'],
            {
                root: __dirname,
                verbose: true,
                dry: false
            }
        )
    ],
    devtool: "source-map"
}