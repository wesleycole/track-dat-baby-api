const gulp = require('gulp');
const shell = require('gulp-shell');
const tslint = require('gulp-tslint');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('tslint', () => {
  return gulp
    .src('src/**/*.ts')
    .pipe(
      tslint({
        formatter: 'prose'
      })
    )
    .pipe(tslint.report());
});

gulp.task('default', () => {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('dist'));
});
