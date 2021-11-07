const { src, dest, watch } = require('gulp');
const minifyCss = require('gulp-clean-css');

const bundleCss = () => {
    return src('./static/css/*.css')
    .pipe(minifyCss())
    .pipe(dest('./dist/static/css'));
};

const devWatch = () => {
    watch('./static/css/**/*.css', bundleCss);
}

exports.bundleCss = bundleCss;
exports.devWatch = devWatch;