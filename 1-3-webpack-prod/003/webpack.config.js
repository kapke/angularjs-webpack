const path = require('path');

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = function (env={env: 'production'}) {
    /// That function is very useful to know whether we're building in production or development mode
    const isProdEnv = () => env.env === 'production';

    const config = {
        entry: './src/index',
        output: {
            /// Bundle target directory
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js',
        },
        module: {
            loaders: [
                {test: /\.styl$/, loaders: ['style', 'css', 'stylus']},
            ],
        },
    };

    //4/ Let's use UglifyJS in production mode
    if (isProdEnv()) {
        config.plugins = [
            new webpack.optimize.UglifyJsPlugin(),
            new CopyWebpackPlugin([{from: './src/index.html', to: 'index.html'}])
        ];
    }

    return config;
};
