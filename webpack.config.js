var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle-[hash].js',
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.pug$/, loader: 'pug-loader'},
            {test: /\.html$/, loader: 'html-loader'},
        ],
    },
    plugins: [new HtmlWebpackPlugin({template: 'src/index.pug', filename: 'index.html'})],
    mode: process.env.NODE_ENV || 'development',
    resolve: {modules: [__dirname + '/src', 'node_modules']},
};
