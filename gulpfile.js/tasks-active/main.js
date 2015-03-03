var gulp = require('gulp');

gulp.task('init', ['images','javascript','styles','templates']);
gulp.task('default', ['init','watch','connect']);
