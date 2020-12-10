const { src, dest, series, parallel } = require("gulp");

// a function for HTML tasks
function htmlTask() {
  return src('src/*.html')
    .pipe('dist');
}

// a function for JS file tasks
function scriptTask() {
  return src('src/scripts/*.js')
    .pipe('dist/scripts');
}

// a function for CSS files tasks
function stylesTask() {
  return src('src/*.css', 'src/styles/*.css')
    .pipe('dist/styles');
}

// a function for images tasks
function imageTask() {
  return src('src/images/*.jpg', 'src/images/*.png', 'src/images/*.webp')
    .pipe('dist/images');
}