var gulp      = require('gulp');
var connect   = require('gulp-connect');
var config    = require('../config').connect;

gulp.task('connect', function() {
  connect.server({
    root: config.server,
    livereload: true
  });
});
