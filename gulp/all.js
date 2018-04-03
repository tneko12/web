const gulp = require('gulp');
require('./html');
require('./js');
require('./css');

gulp.task('all', () => {
    const runSequence = require('run-sequence');
    return runSequence(
        'html',
        'css',
        'js');
});

gulp.task('watch', () => {
});
