// TODO: webpack preset env

const gulp = require("gulp");
const del = require("del");
const runSequence = require("run-sequence");
const sass = require("gulp-sass");

gulp.task("clean_build", function () {
    return del(["anifun/assets/build/**/*"]);
});

gulp.task("sass", function () {
    return gulp.src("anifun/assets/sass/**/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("anifun/assets/build/css"));
});

/* --- DEFAULT TASK --- */
// The default gulp task that runs when we
// just type `gulp`
gulp.task("default", function (callback) {
    runSequence(
        "clean_build",
        "sass",
        callback
    );
});
