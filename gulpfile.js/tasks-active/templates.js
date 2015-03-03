var gulp      = require('gulp');
var connect   = require('gulp-connect');
var swig      = require('gulp-swig');
var marked    = require('swig-marked');
var config    = require('../config').templates;

gulp.task('templates', function() {
  gulp.src(config.source)
    .pipe(swig({
      setup: function(swig) {
        marked.useTag(swig, 'markdown');
      },
      defaults: { cache: false }
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
});
