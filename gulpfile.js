'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var conf = {
    css: './css',
    scss: './scss/'
};

gulp.task('sass', function () {
    gulp.src(conf.scss+'*.scss')
        .pipe(sass({
            outputStyle: 'compact'
        }).on('error', sass.logError))
        .pipe(gulp.dest(conf.css));
});

gulp.task('sass:watch', function () {
    gulp.watch(conf.scss+'*.scss', ['sass']);
});
