const path = require('path');
const HappyPack = require('happypack');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: 'inline-source-map',
    entry: './src/main.ts'
    ,
    output: {
        path: path.resolve(__dirname, "public/dist"),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [path.resolve(__dirname, "node_modules")],
                use: 'happypack/loader?id=ts'
            }
        ]
    },
    devServer: {
        contentBase: [
          'public/'
        ],
        hot: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HappyPack({
            id: 'ts',
            threads: 4,
            loaders: [
                {
                    path: 'ts-loader',
                    query: { happyPackMode: true }
                }
            ]
        })
    ]
}