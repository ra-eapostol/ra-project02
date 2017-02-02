var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
var cssMin = require('gulp-cssmin');
var sass = require('gulp-sass');




gulp.task('sass', function() {
	gulp.src('./src/sass/styles.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./dist/'))
	.pipe(cssMin())
	.pipe(uglifycss())
	.pipe(rename('style.min.css'));	
		
})

gulp.task('default', function() {
	gulp.src('./')
	gulp.watch('./src/sass/*.scss', ['sass'])
})


