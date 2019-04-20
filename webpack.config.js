const { join } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'web',
    context: join(__dirname, 'src'),
    entry: [
        './index.js',
        './styles/main.scss',
    ],
    output: {
        path: join(__dirname, 'dist'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: [
            join(__dirname, 'node_modules'),
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './template/index.html',
            filename: './index.html',
        }),
    ],
};
