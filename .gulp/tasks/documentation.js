const fs = require('fs');
const gulp = require('gulp');
const g = require('gulp-load-plugins')({lazy: true});


gulp.task('documentation', () => {
  return gulp.src('src/*.js')
    //.pipe(g.jsdocToMarkdown({ template: fs.readFileSync('./readme.hbs', 'utf8') }))
    .pipe(g.jsdocToMarkdown())
    .on('error', (err) => {
      g.util.log(g.util.colors.red('jsdoc2md failed'), err.message)
    })
    .pipe(g.rename((path) => {
      path.extname = '.md'
    }))
    .pipe(gulp.dest('documentation'))
});
