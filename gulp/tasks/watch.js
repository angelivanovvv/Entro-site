var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');

var SOURCEPATHS = {
    htmlSource: 'src/*.html',
    cssSource: 'src/scss/**/*.scss',
    assetsSource: 'src/assets/**',
    jsSource: 'src/scripts/**',
    fonts: 'src/fonts**'
};

var APPPATH = {
    root: 'app',
    css: 'app/css',
    js: 'app/scripts'
};

gulp.task('server', ['styles'], function() {
    browserSync.init([APPPATH.css + '/*.css', APPPATH.root + '/*.html', APPPATH.js + '/*.js'], {
        server: {
            baseDir: APPPATH.root
        }
    });
});

gulp.task('scriptRefresh', ['scripts'], function() {
    browserSync.reload();
});

gulp.task('watch', ['server', 'html', 'styles', 'scriptRefresh', 'assets', 'fonts'], function() {
    gulp.watch([SOURCEPATHS.htmlSource], ['html']);
    gulp.watch([SOURCEPATHS.cssSource], ['styles']);
    gulp.watch([SOURCEPATHS.jsSource], ['scriptRefresh']);
    gulp.watch([SOURCEPATHS.assetsSource], ['assets']);
    gulp.watch([SOURCEPATHS.fonts], ['fonts']);
});