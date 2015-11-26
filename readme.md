# gulp-link-to-import

> Gulp plugin for [link-to-import](https://github.com/ragingwind/link-to-import) that replace <link> with @import

*Issues with the output should be reported on the `link-to-import` [issue tracker](https://github.com/ragingwind/link-to-import/issues).*


## Install

```
$ npm install --save-dev gulp-link-to-import
```


## Usage

```js
var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var linkToImport = require('gulp-link-to-import');

gulp.task('default', function () {
	return gulp.src('bower_components/font-roboto/index.html')
		.pipe(linkToImport())
		.pipe(gulp.dest('dest'));
});
```

## License

MIT © [Jimmy Moon](http://ragingwind.me)
