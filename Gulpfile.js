var gulp = require('gulp');
var ts = require('gulp-typescript');
var u = require('gulp-uglify');
var jade = require('gulp-jade');

gulp.task('ts', function() {
  return gulp.src('./src/ts/*.ts')
		.pipe(ts({
			noImplicitAny: true,
			out: 'lp.js'
		}))
    .pipe(u())
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('jade', function() {
  return gulp.src('./src/jade/*.jade')
    .pipe(jade({
      locals: {}
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('css', function() {
  return gulp.src('./src/css/*.css')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['ts', 'jade', 'css']);
