export const three = () => {
    return app.gulp.src(app.path.src.three)
        .pipe(app.gulp.dest(app.path.build.three))
        .pipe(app.plugins.browserSync.stream())
}