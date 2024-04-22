
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

exports.default=function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/Styles'));
};
 


