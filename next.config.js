const webpack = require('webpack');

module.exports = {
	webpack: (config, { defaultLoaders, dev }) => {
		config.module.rules.push({
			test: /\.css$/,
			use: [
				defaultLoaders.babel,
				{
					loader: require('styled-jsx/webpack').loader,
					options: {
						type: 'scoped',
					},
				},
			],
		});

		config.devtool = 'source-map';
		config.mode = 'development';
		config.optimization.minimize = false;
		config.optimization.minimizer = [];

		return config;
	},
	productionBrowserSourceMaps: true,
};
