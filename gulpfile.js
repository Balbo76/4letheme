const { dest, src } = require("gulp");
const sass = require("gulp-dart-sass");

function scss() {
    return src("style.scss")
        .pipe(sass())
        .pipe(dest("./"));
}

exports.scss = scss;
exports.default = scss;