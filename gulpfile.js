const rename = require('gulp-rename');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', () => {
  return gulp
    .src('./sass/main.scss')
    .pipe(rename('style.css'))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
  gulp.watch('./sass/*.scss', gulp.series('sass'));
});
