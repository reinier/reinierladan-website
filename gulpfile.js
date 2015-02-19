var gulp      = require('gulp');

var del       = require('del');

var sass      = require('gulp-ruby-sass');
var connect   = require('gulp-connect');
var swig      = require('gulp-swig');
var marked    = require('swig-marked');
var deploy    = require('gulp-gh-pages');
var imagemin  = require('gulp-imagemin');
var pngquant  = require('imagemin-pngquant');

/* ---------------------------------------
    CONFIG
   --------------------------------------- */

var paths = {
  sass: 'src/**/*.scss',
  sassLibs: [
    'node_modules/node-bourbon/assets/stylesheets',
    'src/styles/'
  ],
  assets: 'src/assets/**/*',
  javascript: 'src/js/**/*',
  html: 'src/**/*.html',
  content: ['src/**/*.html','!./src/layouts/*',,'!./src/chunks/*']
};

var sassConfig = {
  loadPath: paths.sassLibs
};

var deployConfig = {
  branch: 'build'
};

var swigConfig  = {
  setup: function(swig) {
    marked.useTag(swig, 'markdown');
  },
  defaults: { cache: false }
};


/* ---------------------------------------
    PROCESS FILES
   --------------------------------------- */

gulp.task('styles', function() {
  gulp.src(paths.sass)
    .pipe(sass(sassConfig))
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest('./public'))
    .pipe(connect.reload());
});

gulp.task('javascript', function() {
  gulp.src(paths.javascript)
    .pipe(gulp.dest('./public/js'));
});

gulp.task('images', function () {
  return gulp.src(paths.assets)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./public/assets'));
});

gulp.task('templates', function() {
  gulp.src(paths.content)
    .pipe(swig(swigConfig))
    .pipe(gulp.dest('./public'))
    .pipe(connect.reload());
});


/* ---------------------------------------
    WATCH & CONNECT
   --------------------------------------- */

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['styles']);
  gulp.watch(paths.html, ['templates']);
  gulp.watch(paths.javascript, ['javascript']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});


/* ---------------------------------------
    BUILD & CLEAN
   --------------------------------------- */

/* Run 'clean' and after that 'deploy' */
gulp.task('build', ['clean'], function () {
  // gulp.run() is depricated. Figure out another way to do this.
  gulp.run('deploy');
});

/* Deploy ./public dir to gh-pages branch */
gulp.task('deploy', ['init'], function () {
  return gulp.src('./public/**/*')
    .pipe(deploy());
});

/* Clean the public directory */
gulp.task('clean', function (cb) {
  del('public/**', cb);
});

/* Deploy `./public` to `public` branch */
gulp.task('public', function () {
  return gulp.src('./public/**')
    .pipe(deploy({ branch: 'public' }));
});

/* ---------------------------------------
    DEFAULT & INIT
   --------------------------------------- */

gulp.task('init', ['images','javascript','styles','templates']);
gulp.task('default', ['init','watch','connect']);
