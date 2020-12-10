const { src, dest, series, parallel } = require("gulp");
const gulppostcss = require('gulp-postcss');
const postcss = require('postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// a function for HTML tasks
function htmlTask() {
  return src('src/*.html')
    .pipe(dest('dist'))
}

// a function for JS file tasks
function scriptTask() {
  return src('src/scripts/*.js')
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(concat('all.js'))
  .pipe(dest('dist/scripts'))
}

// a function for CSS files tasks
function stylesTask() {
  return src('src/styles/*.css')
    .pipe(sourcemaps.init())
    .pipe(gulppostcss([ autoprefixer(), cssnano() ]))
    .pipe(sourcemaps.write())
    .pipe(concat('all.css'))
    .pipe(dest('dist/styles'))
}

// a function for images tasks
function imageTask() {
  return src('src/images/*.jpg')
    .pipe(imagemin())
    .pipe(dest('dist/images'))
}

exports.default = series(htmlTask, imageTask, stylesTask, scriptTask);
