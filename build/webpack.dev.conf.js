const webpack =  require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    // DEV config
    mode: 'development',
    //devtool: false,//'cheap-module-eval-source-map'
    devServer: {
       // contentBase: baseWebpackConfig.externals.paths.dist,
        port: 8080,
        historyApiFallback: true,
        },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
});
