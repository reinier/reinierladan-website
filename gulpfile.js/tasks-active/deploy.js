var gulp      = require('gulp');
var config    = require('../config').dist;
var deploy    = require('gulp-gh-pages');

/* Deploy dir to gh-pages branch */
gulp.task('deploy', ['dist'], function () {
  return gulp.src(config.deploy+'**/*')
    .pipe( deploy() );
});
