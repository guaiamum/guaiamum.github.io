const { join } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const context = join(__dirname, 'src');

module.exports = (env, { mode }) => ({
    resolve: {
        extensions: ['.js'],
        alias: {
            Components: join(context, './components'),
            Assets: join(context, './assets'),
        },
    },
    target: 'web',
    context,
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
                            minimize: mode !== 'development',
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash:8].[ext]',
                            outputPath: './assets/',
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename: 'assets/sprite.svg', // .[hash:4]
                },
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
    devServer: {
        compress: true,
        disableHostCheck: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './template/index.html',
            favicon: './assets/favicon.ico',
            inject: 'head',
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer',
        }),
        new MiniCssExtractPlugin({
            filename: './style.[hash:8].css',
        }),
        new OptimizeCssAssetsPlugin(),
        new SpriteLoaderPlugin({ plainSprite: true }),
    ],
});
