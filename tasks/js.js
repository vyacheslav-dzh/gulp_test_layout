const {
	src,
	dest
} = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const bs = require('browser-sync');

module.exports = function js() {
	return src(['src/components/**/*.js', 'src/js/01_main.js'])
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(concat('main.js'))
		.pipe(dest('docs/js/'))
        .pipe(bs.stream())
}