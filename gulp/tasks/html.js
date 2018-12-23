var gulp = require('gulp'),
    clean = require('gulp-clean');

var SOURCEPATHS = {
    htmlSource: 'src/*.html'
};

var APPPATH = {
    root: 'app'
};
 
gulp.task('clean-html', function() {
    return gulp.src(APPPATH.root + '/*.html', { read: false, force: true })
        .pipe(clean());
});

gulp.task('html', ['clean-html'], function() {
    return gulp.src(SOURCEPATHS.htmlSource)
        .pipe(gulp.dest(APPPATH.root));
});