var gulp = require('gulp');

var htmlmin = require('gulp-htmlmin');
 
gulp.task('minify', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('new'))
});

gulp.task('default', function() {
   gulp.start('minify');
});