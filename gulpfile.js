var gulp    = require('gulp'),
    tinypng = require('gulp-tinypng'),
    secrets = require('./secrets.json'),
    rimraf  = require('rimraf');

gulp.task('default', function () {
  gulp.src('source/**/*.{jpg,png}')
    .pipe(tinypng(secrets.apikey))
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function (cb) {
  rimraf('./build/**/*.*', cb);
});
