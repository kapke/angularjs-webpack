const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const config = {
	/// Sourcemaps are very useful for debugging purposes
	devtool: 'source-map',
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{ test: /\.styl$/, loaders: ['style', 'css', 'stylus'] },
		],
	}
}

module.exports = config
