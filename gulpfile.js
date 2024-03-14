const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

function combineAndMinifyCSS() {
    return gulp.src(['css/home-v4.css', 'css/mobile.css']) // Paths to your CSS files
        .pipe(concat('styles.min.css')) // Concatenate into one file
        .pipe(cleanCSS()) // Minify CSS
        .pipe(gulp.dest('css')); // Output directory
}

exports.default = combineAndMinifyCSS;
