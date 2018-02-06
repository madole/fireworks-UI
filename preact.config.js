const preactCliSwPrecachePlugin = require('preact-cli-sw-precache');

export default function(config) {
	const precacheConfig = {
		runtimeCaching: [
			{
				urlPattern: /.fireworks-scraper./,
				handler: 'network-first'
			}
		],
		filename: 'sw.js',
		clientsClaim: true,
		skipWaiting: true
	};

	return preactCliSwPrecachePlugin(config, precacheConfig);
}
