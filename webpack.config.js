const { join } = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const context = join(__dirname, "src");

module.exports = (env, { mode }) => ({
    resolve: {
        extensions: [".js"],
        alias: {
            Components: join(context, "./components"),
            Assets: join(context, "./assets"),
        },
    },
    target: "web",
    context,
    entry: ["./entry.js", "./styles/main.css"],
    output: {
        path: join(__dirname, "dist"),
        filename: "app.[hash:8].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: mode !== "development",
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[hash:8].[ext]",
                            outputPath: "./assets/",
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: "svg-sprite-loader",
                options: {
                    extract: true,
                    spriteFilename: "assets/sprite.svg", // .[hash:4]
                },
            },
            {
                test: /\.ico$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        compress: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./template/index.html",
            favicon: "./assets/favicon.ico",
            inject: "head",
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: "defer",
        }),
        // new MiniCssExtractPlugin({
        //     filename: './style.[hash:8].css',
        // }),
        // new OptimizeCssAssetsPlugin(),
        new SpriteLoaderPlugin({ plainSprite: true }),
    ],
});
