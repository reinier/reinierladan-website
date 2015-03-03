var gulp      = require('gulp');
var imagemin  = require('gulp-imagemin');
var pngquant  = require('imagemin-pngquant');
var config    = require('../config').images;

gulp.task('images', function () {
  return gulp.src(config.source)
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest(config.dest));
});

gulp.task('images:dist', ['clean:dist'], function () {
  return gulp.src(config.source)
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest(config.dist));
});
