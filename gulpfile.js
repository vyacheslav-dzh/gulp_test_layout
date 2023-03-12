const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.style = tasks.style;
exports.js = tasks.js;
exports.html = tasks.html;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.ttf = tasks.ttf;
exports.fonts = tasks.fonts;
exports.bs = tasks.bs;
exports.watch = tasks.watch;

exports.default = gulp.parallel(
	exports.style,
	exports.js,
	exports.html,
	exports.rastr,
	exports.webp,
	exports.ttf,
	exports.fonts,
	exports.bs,
	exports.watch,
)