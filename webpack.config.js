const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    stats: 'verbose',
    devtool: 'source-map',
    entry: './src/index.js',
    //output: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'var',
        library: 'Client'
    },
    devServer: {
        port: 8000
    },
    module: {
        rules: [ {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.scss$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|svg|gif|jpe?g)$/,
            loader: 'file-loader',
            options: {
                //publicPath: 'css',
                //name: '../images/[contenthash].[ext]',
                //outputPath: 'images'
            }
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
}