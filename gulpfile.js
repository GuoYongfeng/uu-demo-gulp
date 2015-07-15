var gulp = require('gulp');
var less = require('gulp-less');
// var notify = require('gulp-notify');
// var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var reactify = require('reactify');

var paths = {
  css: ['src/less/*.less'],
  js: ['src/js/main.jsx'],
};

gulp.task('less', function () {
    gulp.src(paths.css)
        .pipe(less())
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', function () {
    gulp.watch(paths.css, ['less']);
    gulp.watch(paths.js, ['js']);
});

gulp.task('images', function(){
    gulp.src('public/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'));
});

gulp.task('js', function() {
  browserify(paths.js)
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('serve', function() {
    browserSync({
    	files: ['app/*.html', 'public/stylesheets/*.css', 'public/javascripts/*.js'],
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['watch', 'serve', 'images', 'js']);

