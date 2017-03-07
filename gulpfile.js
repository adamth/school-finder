var gulp        = require('gulp');
var browserify  = require('browserify');
var reactify    = require('reactify');
var source      = require('vinyl-source-stream');

gulp.task('bundle', () => {
    return browserify({
        entries: './app/main.jsx',
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('app/dist'))
});

gulp.task('copy', ['bundle'], () => {
    return gulp.src(['app/index.html','app/lib/bootstrap-css/css/bootstrap.min.css','app/style.css'])
    .pipe(gulp.dest('app/dist'));
});

gulp.task('default',['copy'], () => {
    console.log('Gulp completed...');
});