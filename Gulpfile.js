var gulp = require('gulp');
var ts = require('gulp-typescript');
var u = require('gulp-uglify');
var jade = require('gulp-jade');
var clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src('./dist', {read: false})
    .pipe(clean());
});

// Typescript
gulp.task('ts', ['clean'], function() {
  return gulp.src('./src/ts/**/*.ts')
		.pipe(ts({
	     out: 'lp.js'
     }))
     .pipe(u()) // Uglify JS
    .pipe(gulp.dest('./dist/js/')); // Copy it
});

// Jade
gulp.task('jade', ['clean'], function() {
  return gulp.src('./src/jade/**/*.jade') // Compile it
    .pipe(jade({
      locals: {}
    }))
    .pipe(gulp.dest('./dist/')); // Copy it
});

gulp.task('static', ['clean'], function() {
  return gulp.src('./src/static/**/*.*')
    .pipe(gulp.dest('./dist/')); // Copy static
});

gulp.task('default', ['clean', 'ts', 'jade', 'static']);
