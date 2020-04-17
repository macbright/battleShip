var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'dist'),
    }, 
		plugins: [new HtmlWebpackPlugin({
			template: './src/index.html'
		})],
		module: {
			rules: [
					{
							test: /\.css$/,
							use: [
									'style-loader',
									'css-loader',
							],
					},
					// image loader
					{
							test: /\.(png|svg|jpg|gif)$/,
							use: [
									'file-loader',
							],
					},
					// fonts
					{
							test: /\.(woff|woff2|eot|ttf|otf)$/,
							use: [
									'file-loader',
							],
					},
					{ 
							test: /\.html$/,
							use: [
									"html-loader",
							],
					}

			],
    },
    devServer: {
        contentBase: './dist',
    }

};