const gulp = require('gulp');
const plumber = require('gulp-plumber');

const dest = './docs';
const src = './src';

const config = {
    html: {
        src: src + '/*.html',
        dest: dest + '/',
        uglify: false
    },
}

gulp.task('html', function () {
    gulp.src(config.html.src)
        .pipe(plumber())
        .pipe(gulp.dest(config.html.dest));
});
