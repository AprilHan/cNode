var gulp = require('gulp');
var server = require('gulp-express');
const autoprefixer = require('gulp-autoprefixer')
var cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat')
const uglify = require('gulp-rename')
// const jshint = require('gulp-jshint')

// 实现实时刷新浏览器  动态重启服务
gulp.task('liveload', function () {
    // Start the server at the beginning of the task
    server.run(['app.js']);

    // Restart the server when file changes
    gulp.watch(['www/**/*.html'], server.notify);
    gulp.watch(['www/**/*.js'], server.notify);
    gulp.watch(['www/**/*.css'], server.notify);
    gulp.watch(['views/**/*.ejs'], server.notify);

    gulp.watch(['app.js', 'routes/**/*.js'], [server.run]);
});

// css自动添加前缀
gulp.task('autoPreFix',function(){
    gulp.src('./www/css/index.css')
        .pipe(autoprefixer({
            browsers: ['> 5%'], // 需要支持的浏览器的版本
            cascade: false
        }))
        .pipe(gulp.dest('./www/dist/css'))
});

gulp.task('minifycss',function() {
   return gulp.src('./www/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./www/dist/css'));
})
gulp.task('default',['liveload']);
