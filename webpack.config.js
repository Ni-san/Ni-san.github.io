var Webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle-[hash].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"],
            },
            {
                test: /\.sass$/,
                loader: "style-loader!css-loader!sass-loader?indentedSyntax",
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader?hash=sha512&digest=hex&name=[path][name]-[hash].[ext]",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.pug',
            filename: 'index.html'
        })
    ],
    mode: process.env.NODE_ENV || "development",
    resolve: {
        modules: [
            __dirname + "/src",
            "node_modules"
        ]
    }
};
