var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var hogan = require('hogan.js');
var glob = require('glob');
var fs = require('fs');
// var sourcemap = require('gulp-sourcemaps');

gulp.task('build', function () {
    gulp.src(__dirname + '/../js/app.js')
        // .pipe(sourcemap.init())
        .pipe(browserify())
        .on('prebundle', function (bundle) {
            bundle.transform('brfs');
            bundle.external('jquery');
        })
        .pipe(uglify())
        // .pipe(sourcemap.write())
        .pipe(gulp.dest(__dirname + '/../js/built'));
});

// not exactly functional:

// gulp.task('templates', function () {
//
//     var out = 'var templates = {};';
//     function getDest(filename) {
//         return filename.replace('../design/template', '../js') + '.js';
//     }
//     glob('../design/template/**/*.mustache', {}, function (err, matches) {
//         matches.map(function (filename) {
//             var buffer = 'module.exports = ' + hogan.compile(
//                 fs.readFileSync(filename).toString(), {asString: 1});
//             var dest = getDest(filename);
//             fs.writeFile(dest, buffer, function (err) {
//                 console.log(err);
//             });
//         });
//     });
// });