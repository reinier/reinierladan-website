var gulp      = require('gulp');
var config    = require('../config').dist;
var deploy    = require('gulp-gh-pages');

/* Run 'clean' and after that 'deploy' */
gulp.task('dist', ['clean'], function () {
  // gulp.run() is depricated. Figure out another way to do this.
  gulp.run('deploy');
});

/* Deploy dir to gh-pages branch */
gulp.task('deploy', ['init'], function () {
  return gulp.src(config.deploy+'**/*')
    .pipe( deploy() );
});
