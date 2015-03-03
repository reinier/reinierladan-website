var gulp      = require('gulp');
var sass      = require('gulp-ruby-sass');
var connect   = require('gulp-connect');
var config    = require('../config').styles;

gulp.task('styles', function() {
  gulp.src(config.source)
    .pipe(sass(config.sass))
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
});

gulp.task('styles:dist', ['clean:dist'], function() {
  return gulp.src(config.source)
    .pipe(sass(config.sass))
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest(config.dist))
    .pipe(connect.reload());
});
