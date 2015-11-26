'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');
var gutil = require('gulp-util');
var linkToImport = require('./');

it('simple-usage', function (cb) {
	var src = 'fixture/roboto.html';

	var stream = linkToImport();

	stream.on('data', function (file) {
		var contents = file.contents.toString();
		assert(/@import/.test(contents));
		assert(!/link/.test(contents));
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		cwd: __dirname,
		base: path.join(__dirname, path.basename(src)),
		path: src,
		contents: new Buffer(fs.readFileSync(src, 'utf8'))
	}));

	stream.end();

});
