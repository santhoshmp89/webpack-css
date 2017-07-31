var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.resolve('js'),
	entry: ["./app.js"],
	output: {
		path: path.resolve('build/'),
		publicPath: '/public/assets/',
		filename: 'bundle.js'
	},

	devServer: {
		contentBase: 'public'
	},

	module: {
		rules: [
			/*{
				test: /\.js/,
				exclude: /nodule_modules/,
				loaders: 'jshint-loader',
				enforce: 'pre'
			},	*/	
			{
				test: /\.es6$/,
				exclude: /nodule_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				exclude: /nodule_modules/,
				use: ExtractTextPlugin.extract({
			          fallback: 'style-loader',
			          use: 'css-loader'
			        })
			},
			{
				test: /\.scss$/,
				exclude: /nodule_modules/,
				use: ExtractTextPlugin.extract({
			          fallback: 'style-loader',
			          use: ['css-loader', 'sass-loader']
			        })
			}
		]		
	},

	plugins: [
		new ExtractTextPlugin('style.css')
	],

	resolve: {
		extensions: ['.js', '.es6']
	}

}