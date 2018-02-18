const preactCliSwPrecachePlugin = require('preact-cli-sw-precache');

export default function(config, env, helpers) {
	config.devtool = 'source-map';
	const precacheConfig = {
		runtimeCaching: [
			{
				urlPattern: /.fireworks-scraper./,
				handler: 'networkFirst'
			}
		],
		filename: 'sw.js',
		clientsClaim: true,
		skipWaiting: true
	};

	const { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
	const babelConfig = rule.options;

	babelConfig.plugins.push('babel-plugin-styled-components');

	return preactCliSwPrecachePlugin(config, precacheConfig);
}
