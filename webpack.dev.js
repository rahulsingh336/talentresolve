const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',   
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    },  
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            },]
        }]
    },
    // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
    // Without this the console says all errors are coming from just coming from bundle.js
    devtool: "eval-source-map",
    plugins: [                           
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            inject: true,
            template: './src/index.html',
            filename: './dist/index.html',
            //template: require('html-webpack-template'),
            bodyHtmlSnippet :'<div class="main" id="app"></div>'
        }),
        new webpack.DefinePlugin({'process.env.API_URL': JSON.stringify('http://localhost:8000')})
    ]
});