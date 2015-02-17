var gulp    = require('gulp');

var sass    = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var swig    = require('gulp-swig');
var marked  = require('swig-marked');
var deploy = require('gulp-gh-pages');

var paths = {
  sass: 'src/**/*.scss',
  sassLibs: [
    'node_modules/node-bourbon/assets/stylesheets',
    'src/styles/'
  ],
  assets: 'src/assets/**/*',
  html: 'src/**/*.html',
  content: ['src/**/*.html','!./src/layouts/*',,'!./src/chunks/*']
};

var sassConfig = {
  loadPath: paths.sassLibs,
  sourcemap: "none"
};

var swigConfig  = {
  setup: function(swig) {
    marked.useTag(swig, 'markdown');
  },
  defaults: { cache: false }
};


gulp.task('styles', function() {
  gulp.src(paths.sass)
    .pipe(sass(sassConfig))
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest('./public'))
    .pipe(connect.reload());
});

gulp.task('assets', function() {
  gulp.src(paths.assets)
    .pipe(gulp.dest('./public/assets'));
});

gulp.task('templates', function() {
  gulp.src(paths.content)
    .pipe(swig(swigConfig))
    .pipe(gulp.dest('./public'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['styles']);
  gulp.watch(paths.html, ['templates']);
});

gulp.task('connect', connect.server({
  root: ['public'],
  livereload: true
}));

/* Deploy ./public dir to gh-pages branch */
gulp.task('deploy', function () {
  return gulp.src('./public/**/*')
    .pipe(deploy());
});

gulp.task('init', ['assets','styles','templates']);
gulp.task('default', ['init','watch','connect']);
gulp.task('build', ['init','deploy']);
