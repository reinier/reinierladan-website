var gulp      = require('gulp');
var del       = require('del');
var config    = require('../config').clean;

/* Clean the public directory */
gulp.task('clean', function (cb) {
  del(config.all, cb);
});

gulp.task('clean:dist', function (cb) {
  del(config.dist, cb);
});
