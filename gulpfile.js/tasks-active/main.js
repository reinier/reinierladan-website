var gulp = require('gulp');

gulp.task('default', ['init','watch','connect']);

gulp.task('init', ['images','javascript','styles','templates']);
gulp.task('dist', ['images:dist','javascript:dist','styles:dist','templates:dist']);
