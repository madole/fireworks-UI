const preactCliSwPrecachePlugin = require('preact-cli-sw-precache');

export default function(config) {
	const precacheConfig = {
		runtimeCaching: [
			{
				urlPattern: /.fireworks-scraper./,
				handler: 'fastest'
			}
		],
		filename: 'sw.js',
		clientsClaim: true,
		skipWaiting: true
	};

	return preactCliSwPrecachePlugin(config, precacheConfig);
}
