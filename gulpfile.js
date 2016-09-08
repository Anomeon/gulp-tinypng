var gulp    = require('gulp'),
    tinypng = require('gulp-tinypng'),
    rimraf  = require('rimraf');

gulp.task('default', function () {
  gulp.src('source/**/*.{jpg,png}')
    .pipe(tinypng('API_KEY'))
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function (cb) {
  rimraf('./build/**/*.*', cb);
});
