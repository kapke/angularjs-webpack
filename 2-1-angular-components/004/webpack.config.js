const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')


const config = {
	devtool: 'source-map',
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['', '.js', '.ts', '.json']
	},
	module: {
		preLoaders: [
			{ test: /\.ts$/, loaders: ['tslint'], exclude: /node_modules/ },
		],
		loaders: [
			{ test: /\.ts$/, loaders: ['ts'], exclude: /node_modules/ },
            /// An additional query is needed for css loader
			{ test: /\.styl$/, loaders: ['style', 'css?modules', 'stylus'] },
		],
	}
}

module.exports = config
