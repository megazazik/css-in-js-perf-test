module.exports = {
	webpack: (config, { defaultLoaders }) => {
		config.module.rules.push({
			test: /\.jsx.css$/,
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

		return config;
	},
};
