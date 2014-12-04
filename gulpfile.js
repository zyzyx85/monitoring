/**
 * Created by federico on 06/11/14.
 */
var gulp = require('gulp');
var concat = require("gulp-concat");
var less = require("gulp-less");
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var minifyHtml = require("gulp-minify-html");

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

gulp.task('minify-html', function () {
  gulp.src("./client/html/index.html")
    .pipe(minifyHtml())
    .pipe(gulp.dest("./www"));
});

gulp.task('default', [
  'build-less',
  'build-app',
  'minify-html'
], function () {
  gulp.watch('./client/assets/css/*.less', ['build-less']);
  gulp.watch('./client/html/index.html', ['minify-html']);
  gulp.watch('./client/assets/js/**/*.js', ['build-app']);
});