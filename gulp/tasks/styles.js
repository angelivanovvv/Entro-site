var gulp = require('gulp'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    autoPrefixer = require('gulp-autoprefixer');

var SOURCEPATHS = {
    sassSource: 'src/scss/**/*.scss',
    sassApp: 'src/scss/app.scss'
};

var APPPATH = {
    root: 'app',
    css: 'app/css',
};

gulp.task('clean-styles', function() {
    return gulp.src('app/css/**/*.css', { read: false, force: true })
        .pipe(clean());
});

gulp.task('styles', ['clean-styles', 'bootstrap-css'], function() {
    return gulp.src(SOURCEPATHS.sassApp)
        .pipe(autoPrefixer())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest(APPPATH.css));
});

gulp.task('bootstrap-css', function() {
    return gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest(APPPATH.css));
});