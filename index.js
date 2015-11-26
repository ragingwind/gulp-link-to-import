'use strict';

var path = require('path');
var gutil = require('gulp-util');
var through = require('through2');
var linkToImport = require('link-to-import');

module.exports = function (opts) {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-link-to-html', 'Streaming not supported'));
      return;
    }

    var tack = linkToImport(file.contents.toString());

    this.push(new gutil.File({
      cwd: file.cwd,
      base: file.base,
      path: file.path,
      contents: new Buffer(tack.html)
    }));

    cb();
  });
};
