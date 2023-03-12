const bs = require('browser-sync');

module.exports = function bs_html() {
	bs.init({
		server: {
			baseDir: 'docs/',
			host: '192.168.0.103',
			// host: 'localhost',
		},
		callbacks: {
			ready: function (err, bs) {
				bs.addMiddleware("*", function (req, res) {
					res.writeHead(302, {
						location: "404.html"
					});
					res.end("Redirecting!");
				});
			}
		},
		//browser: 'chrome',
		logPrefix: 'BS-HTML:',
		logLevel: 'info',
		logConnections: true,
		logFileChanges: true,
		open: true
	})
}