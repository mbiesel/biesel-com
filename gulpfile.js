'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var src = 'Packages/Sites/Biesel.BieselCom/Resources/Private/';
var slider = 'Packages/Application/Byron.Neos.Slider/Resources/Private/';
var dest = 'Packages/Sites/Biesel.BieselCom/Resources/Public/';
var lib = 'node_modules/';

gulp.task('sass', function () {
    return gulp.src(src + 'Sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest + 'Styles'));
});

gulp.task('sass:watch', function() {
    gulp.watch(src + 'Sass/**/*.scss', gulp.series('sass'));
    gulp.watch(slider + 'Sass/**/*.scss', gulp.series('sass'));
});

gulp.task('scripts', function() {
    return gulp.src([lib + 'jquery/dist/jquery.min.js',lib + 'picturefill/dist/picturefill.min.js', lib + 'bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
            lib + 'bootstrap-sass/assets/javascripts/bootstrap/transition.js', src + 'JavaScript/**/*.js'])
        .pipe(concat('Bootstrap.js'))
        .pipe(gulp.dest(dest + 'JavaScript/'));
});