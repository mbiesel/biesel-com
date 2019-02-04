'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var src = 'Packages/Sites/Biesel.BieselCom/Resources/Private/';
var dest = 'Packages/Sites/Biesel.BieselCom/Resources/Public/';

gulp.task('sass', function () {
    return gulp.src(src + 'Sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest + 'Styles'));
});

gulp.task('sass:watch', function() {
    gulp.watch(src + 'Sass/**/*.scss', gulp.series('sass'));
});