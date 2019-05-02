const { join } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => ({
    target: 'web',
    context: join(__dirname, 'src'),
    entry: [
        './entry.js',
        './styles/main.scss',
    ],
    output: {
        path: join(__dirname, 'dist'),
        filename: 'app.[hash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' },
                ],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: argv.mode !== 'development',
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash:8].[ext]',
                            outputPath: './icons/',
                        },
                    },
                ],
            },
            {
                test: /\.ico$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './template/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: './style.[hash:8].css',
        }),
        new OptimizeCssAssetsPlugin(),
    ],
});
