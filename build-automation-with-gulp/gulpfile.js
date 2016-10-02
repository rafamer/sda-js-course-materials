var gulp = require('gulp');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var del = require('del');

// styles plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');

// scripts plugins
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

var sourcePaths = {
  styles: './styles/**/*.scss',
  scripts: './scripts/**/*.js'
};

// styles task
gulp.task('styles', function () {
  return gulp.src(sourcePaths.styles)
    .pipe( sass({ outputStyle: 'expanded' }).on('error', sass.logError) )
    .pipe( autoprefixer({ browsers: ['last 2 versions'] }) )
    .pipe( concat('styles-bundle.css') )
    .pipe( cssnano() )
    .pipe( gulp.dest('./www/styles') );
});


// scripts task
gulp.task('scripts', function () {
  return gulp.src(sourcePaths.scripts)
    .pipe( babel({ presets: ['es2015'] }) )
    .on('error', function (error) {
      console.error(error);
      this.emit('end');
    })
    .pipe( concat('scripts-bundle.js') )
    .pipe( uglify() )
    .pipe( gulp.dest('./www/scripts') );
});


// clean task
gulp.task('clean', function() {
  return del(['www/**']);
});


// watchers
gulp.task('watch', function() {
  gulp.watch(sourcePaths.styles, ['styles']);
  gulp.watch(sourcePaths.scripts, ['scripts']);

  livereload.listen();

  gulp.watch(['www/**']).on('change', livereload.changed);
});

// put it all together
gulp.task('default',  ['clean', 'styles', 'scripts', 'watch']);
