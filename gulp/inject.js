'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

module.exports = function(options) {
  gulp.task('inject', ['scripts', 'styles'], function () {
    var injectStyles = gulp.src([
      options.tmp + '/serve/app/**/*.css',
      '!' + options.tmp + '/serve/app/vendor.css'
    ], { read: false });

    // var injectScripts = gulp.src([
    //   options.src + '/app/**/*.js',
    //   options.src + '/vendor/*.js', //MODFIIED
    //   '!' + options.src + '/app/**/*.spec.js',
    //   '!' + options.src + '/app/**/*.mock.js'
    // ])
    var injectScripts = gulp.src([
      options.src + '/vendor/*.js', //MODFIIED
      options.src + '/app/index.js',
      options.src + '/app/common/common.dataservice.js',
      options.src + '/app/components/navbar/navbar.directives.js',     
      options.src + '/app/contactus/contactus.controller.js',
      options.src + '/app/products/products.service.js',
      options.src + '/app/products/products.controller.js',
      options.src + '/app/portfolio/portfolio.services.js',
      options.src + '/app/portfolio/portfolio.directives.js',
      options.src + '/app/portfolio/portfolio.controller.js',
      options.src + '/app/facilities/facilities.services.js',
      options.src + '/app/facilities/facilities.directives.js',
      options.src + '/app/facilities/facilities.controller.js',
      options.src + '/app/main/main.dataservices.js',
      options.src + '/app/main/main.directives.js',
      options.src + '/app/main/main.controller.js',
      // '!' + options.src + '/app/**/*.spec.js',
      // '!' + options.src + '/app/**/*.mock.js'
    ]);
    // .pipe($.angularFilesort()).on('error', options.errorHandler('AngularFilesort')); //MODIFIED
    var injectOptions = {
      ignorePath: [options.src, options.tmp + '/serve'],
      addRootSlash: false
    };
    return gulp.src(options.src + '/*.html')
      .pipe($.inject(injectStyles, injectOptions))
      .pipe($.inject(injectScripts, injectOptions))
      .pipe(wiredep(options.wiredep))
      .pipe(gulp.dest(options.tmp + '/serve'));

  });
};
