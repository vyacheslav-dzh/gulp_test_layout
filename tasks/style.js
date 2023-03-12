const {
	src,
	dest
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const bulk = require('gulp-sass-bulk-importer');
const prefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const bs = require('browser-sync');

module.exports = function style() {
    return src('src/scss/**/*.scss')
        .pipe(bulk())
        .pipe(sass())
        .pipe(prefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false 
        }))
        .pipe(concat('style.css'))
        .pipe(dest('docs/css/'))
    .pipe(bs.stream())
}