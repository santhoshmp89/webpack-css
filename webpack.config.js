var path = require('path');

module.exports = {
	context: path.resolve('js'),
	entry: ["./app.js"],
	output: {
		path: path.resolve('build/js'),
		publicPath: '/public/assets/js',
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
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss$/,
				exclude: /nodule_modules/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]		
	},

	resolve: {
		extensions: ['.js', '.es6']
	}

}