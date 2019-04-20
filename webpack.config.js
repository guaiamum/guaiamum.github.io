const path = require('path');

module.exports = {
    target: 'web',
    context: path.join(__dirname, 'src'),
    entry: [
        './index.js',
        './styles/main.scss',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
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
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};
