/**
 * Created by federico on 06/11/14.
 */
var gulp = require('gulp')
var concat = require("gulp-concat");
var less = require("gulp-less");
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('browserify')
var source = require('vinyl-source-stream')

gulp.task('build-app', function () {
  return browserify('./client/assets/js/init.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./www/js'));
});

gulp.task('build-less', function () {
  gulp.src('./client/assets/css/*.less')
    .pipe(concat('app.less'))
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./www/css'));
});


//gulp.task('default', ['serve']);
//gulp.task('default', ['build-app','build-less']);

gulp.task('default', [
  'build-less',
  'build-app'
], function () {
  gulp.watch('./client/assets/css/*.less', ['build-less']);
  gulp.watch('index.html', ['minify-html']);
  gulp.watch('./client/assets/js/**/*.js', ['build-app']);
});