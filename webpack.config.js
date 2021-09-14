module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'index.js',
		path: __dirname + '/./dist',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [{ test: /\.ts$/, use: 'awesome-typescript-loader' }],
	},

	devServer: {
		port: 5555,
	},
}
