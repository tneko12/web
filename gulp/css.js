const gulp = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

const dest = './docs';
const src = './src';

const config = {
    css: {
        src: src + '/scss/**',
        dest: dest + '/css',
        uglify: false
    },
}

gulp.task('css', function () {
    gulp.src(config.css.src)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.css.dest));
});
