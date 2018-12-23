var gulp = require('gulp'),
    clean = require('gulp-clean');

var SOURCEPATHS = {
    fonts: 'src/fonts/**/*'
};

var APPPATH = {
    root: 'app',
    fonts: 'app/fonts'
};

gulp.task('clean-fonts', function() {
    return gulp.src(APPPATH.fonts + '/*', { read: false, force: true })
        .pipe(clean());
});

gulp.task('fonts', ['clean-fonts'], function() {
    return gulp.src(SOURCEPATHS.fonts)
        .pipe(gulp.dest(APPPATH.fonts));
});