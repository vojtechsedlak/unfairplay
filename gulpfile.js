var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var browserify = require('browserify');
var del = require('del');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var ghPages = require('gulp-gh-pages');

var paths = {
	sass:'src/scss/',
	js:'src/js/',
	dist:'dist/',
	index:'dist/index.html'
}

gulp.task('clean:dist', function () {
    del.sync([
        paths.dist
    ]);
});

gulp.task('sass', function() {
	return gulp.src(`${paths.sass}/index.scss`)
		.pipe(sass())
		.pipe(gulp.dest(paths.dist))
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts', function() {
	return gulp.src(`${paths.js}/*.js`)
		.pipe(jshint())
    	.pipe(concat('main.js'))
		.pipe(gulp.dest(`${paths.dist}/js`))
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('copy:jquery', () =>
    gulp.src(['node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest(`${paths.dist}/js/vendor`))
);

gulp.task('html', function(){
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: paths.dist
		}
	})
});  
 
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('build', function(callback) {
	runSequence(
		'clean:dist', 
		'scripts',
		'copy:jquery',
		'sass',
		'html',
		callback)
});

gulp.task('watch', ['browserSync', 'sass', 'scripts'], function() {
	gulp.watch(`${paths.sass}/*.scss`, ['sass']);
	gulp.watch(`${paths.js}/*.js`, ['scripts']);
	gulp.watch('src/*.html',['html']);
	gulp.watch('dist/*.html',browserSync.reload);
})