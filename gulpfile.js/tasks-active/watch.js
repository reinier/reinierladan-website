var gulp      = require('gulp');
var config    = require('../config').watch;

gulp.task('watch', function() {
  gulp.watch(config.source.styles, ['styles']);
  gulp.watch(config.source.templates, ['templates']);
  gulp.watch(config.source.javascript, ['javascript']);
});
