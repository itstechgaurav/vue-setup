'use strict'

const path = require("path");
const webpack = require("webpack");
const {
    VueLoaderPlugin
} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = true;

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: './src/app.js',
    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    isDev ? "vue-style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true
        }),
        new MiniCssExtractPlugin({
            filename: "app.css",
            chunkFilename: "[id].css"
        })
    ]

}
