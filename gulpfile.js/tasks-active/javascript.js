var gulp      = require('gulp');
var config    = require('../config').javascript;

gulp.task('javascript', function() {
  gulp.src(config.source)
    .pipe(gulp.dest(config.dest));
});

gulp.task('javascript:dist', ['clean:dist'], function() {
  return gulp.src(config.source)
    .pipe(gulp.dest(config.dist));
});
