import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

export default {
	entry: ['./static/main.tsx', './static/styles/main.css'],
	mode: 'production',
	devtool: 'source-map',
	experiments: {
		topLevelAwait: true,
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve('./dist/'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?/,
				exclude: /node_modules/,
				use: {
					loader: 'swc-loader',
					options: {
						jsc: {
							parser: {
								syntax: 'typescript',
								tsx: true,
							},
							transform: {
								react: {
									runtime: 'automatic',
								},
							},
						},
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
				],
			},
			{
				test: /\.svg$/,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	optimization: {
		minimizer: [
			'...',
			new CssMinimizerPlugin(),
		],
		splitChunks: {
			automaticNameDelimiter: '.',
			chunks: 'all',
			name: 'vendor',
		},
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new HtmlWebpackPlugin({
			favicon: './static/favicon.ico',
			title: 'POOLED',
			filename: 'index.html',
			template: './static/index.html',
		}),
	],
};
