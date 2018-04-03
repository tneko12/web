const gulp = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const webpack = require('gulp-webpack');

const dest = './docs';
const src = './src';

const config = {
    js: {
        src: src + '/js/**',
        dest: dest + '/js',
        uglify: false
    },

    webpack: {
        entry: src + '/js/app.js',
        output: {
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['', '.js']
        }
    }
}

gulp.task('js', function () {
    gulp.src(config.webpack.entry)
        .pipe(plumber())
        .pipe(webpack(config.webpack))
        .pipe(gulpif(config.js.uglify, uglify()))
        .pipe(gulp.dest(config.js.dest));
});
