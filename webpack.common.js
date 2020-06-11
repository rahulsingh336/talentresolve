const path = require('path');

module.exports = {    
    entry: ['./src/js/index.js','./src/sass/main.scss'], 
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                options: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }]
    },
}