const gulp = require('gulp')
const rename = require('gulp-rename')
const convert = require('gulp-convert-encoding')

gulp.task('convert', () => {
  return gulp.src('./Japanese.txt')
    .pipe(rename('English.txt'))
    .pipe(convert({to: 'Shift_JIS'}))
    .pipe(gulp.dest('.'))
})

gulp.task('watch', () => {
  const watcher = gulp.watch('./Japanese.txt', ['convert'])
  watcher.on('change', event => {
    console.log(`File ${event.path} was ${event.type}, running tasks...`)
  })

})
