var gulp = require('gulp'),
    util = require('gulp-util'),
    jshint = require('gulp-jshint'),
    beautify = require('gulp-jsbeautifier');

var src_files = [
    './**/*.js',
    '!./node_modules/**'
];

gulp.task('default', ['watch']);

gulp.task('jshint', function(){
    return gulp.src(src_files)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('format-js', function(){
    return gulp.src(src_files)
        .pipe(beautify({mode: 'VERIFY_AND_WRITE'}));
});

gulp.task('watch', function(){
    return gulp.watch(src_files, ['jshint', 'format-js']);
});
