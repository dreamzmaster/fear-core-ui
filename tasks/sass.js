'use strict';

module.exports = function () {

    var gulp = require('gulp'),
        sass = require('gulp-sass'),
        bourbon = require('node-bourbon');

    gulp.task('sass', function () {
        gulp.src(['./app/sass/**/*.scss'])
            .pipe(sass({
                includePaths: bourbon.includePaths
            }).on('error', sass.logError))
            .pipe(gulp.dest('./build/css'))
    });
};