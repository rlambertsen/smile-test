var gulp = require('gulp');
var copy = require('gulp-copy');
var sass = require('gulp-sass');
var concat = require('gulp-concat');


gulp.task('copy', function() {
    //jQuery 
    gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('public/js'))

    //bootstrap js 
    gulp.src('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js')
    .pipe(gulp.dest('public/js'))

    //bootstrap sass 
    gulp.src('node_modules/bootstrap-sass/assets/stylesheets/**')
    .pipe(gulp.dest('public/sass'))

    //bootstrap fonts
    gulp.src('node_modules/bootstrap-sass/assets/fonts/**')
    .pipe(gulp.dest('public/fonts'));

    //Font Awesome lib
    gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('public/css'))

    //Font Awesome fonts
    gulp.src('node_modules/font-awesome/fonts/**')
    .pipe(gulp.dest('public/fonts'));

    //flexslider css
    gulp.src('node_modules/flexslider/flexslider.css')
    .pipe(gulp.dest('public/css'))

    //flexslider fonts?
    gulp.src('node_modules/flexslider/fonts/**')
    .pipe(gulp.dest('public/css/fonts'))

    //flexslider js
    gulp.src('node_modules/flexslider/jquery.flexslider.js')
    .pipe(gulp.dest('public/js'));
});

gulp.task('sass', function () {
    gulp.src('./public/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function() {
    gulp.src(
                [
                    '/public/js/jquery.min.js', 
                    '/public/js/bootstrap.min.js', 
                    '/public/js/jquery.slideme2.js'
                ]
            )
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('default', ['copy', 'sass', 'scripts'], function() {});
