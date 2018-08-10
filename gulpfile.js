const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// Static server
gulp.task('default', () => {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    gulp.watch([
      "**/*.html", 
      "**/*.css" ,
      "**/*.js"
    ]).on("change", reload)
});