var gulp = require('gulp');

gulp.task('default', function() {

  var gls = require('gulp-live-server');
  //1. run your script as a server
  var server = gls.new('bin/www');
  server.start();

  //use gulp.watch to trigger server actions(notify, start or stop)
  gulp.watch(['public/**/*.*', 'views/**/*.html'], function(file) {
    server.notify.apply(server, [file]);
  });

  gulp.watch(['web_routes.js'], function(file) {
    server.start.bind(server, [file]); //restart my server
  });
});
