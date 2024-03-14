const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

// Task to minify and concatenate JavaScript files
gulp.task('minify-js', function() {
    return gulp.src(['js/jquery-ui.js', 'js/bootstrap.js']) // Source files
        .pipe(concat('global.min.js')) // Concatenate into one file
        .pipe(uglify()) // Minify the files
        .pipe(gulp.dest('js')); // Output directory for minified JS
});
function combineAndMinifyCSS() {
    return gulp.src(['css/jquery-ui.css','css/bootstrap.css', 'css/home-v4.css', 'css/mobile.css']) // Paths to your CSS files
        .pipe(concat('styles.min.css')) // Concatenate into one file
        .pipe(cleanCSS()) // Minify CSS
        .pipe(gulp.dest('css')); // Output directory for minified CSS
}

exports.default = gulp.series('minify-js', combineAndMinifyCSS);
