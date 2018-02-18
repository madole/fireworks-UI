const preactCliSwPrecachePlugin = require('preact-cli-sw-precache');
const asyncPlugin = require('preact-cli-plugin-fast-async');

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

	return asyncPlugin(preactCliSwPrecachePlugin(config, precacheConfig));
}
