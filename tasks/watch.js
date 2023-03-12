const {
	watch,
	parallel,
	series
} = require('gulp');

module.exports = function watching() {
	watch('src/**/*.html', parallel('html'));
	watch('src/**/*.scss', parallel('style'));
	watch('src/**/*.js', parallel('js'));
	watch('src/**/*.json', parallel('html'));
	watch('src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)', parallel('rastr'));
	watch('build/img/**/*.+(png|jpg|jpeg)', parallel('webp'));
	watch('src/svg/css/**/*.svg', series('style'));
	watch('src/svg/sprite/**/*.svg', series('rastr'));
	watch('src/fonts/**/*.ttf', series('ttf', 'fonts'));
}