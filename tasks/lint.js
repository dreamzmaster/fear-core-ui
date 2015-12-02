'use strict';

module.exports = function () {

    var gulp = require('gulp'),
        scsslint = require('gulp-scss-lint'),
        cache = require('gulp-cached');

    gulp.task('lint-sass', function() {
        gulp.src(['./app/sass/**/*.scss', './test/sass/**/*.scss'])
            .pipe(cache('scsslint'))
            .pipe(scsslint())
            .pipe(scsslint.failReporter());
    });

}
