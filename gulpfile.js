'use strict';

var gulp = require("gulp");
var sass = require("gulp-sass");
const { watch } = require('gulp');

gulp.task("sass", function () {
 return gulp.src("styles/scss/*.scss")
 .pipe(sass().on("error", sass.logError))
 .pipe(gulp.dest("styles/css"));
 });

 // compile and watch
 gulp.task('watch', function() {
  gulp.watch('styles/scss/*.scss', gulp.series('sass'));
});
