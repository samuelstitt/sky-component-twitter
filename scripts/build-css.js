// BUILD CSS
// ================
// get dependencies
var fs = require('fs');
require('es6-promise').polyfill();
var postcss = require('postcss');
var path = require('path');

// path consts
var ROOT_PATH = path.dirname(__dirname);
var INPUT_PATH = ROOT_PATH + '/src/css/bundle.css';
var OUTPUT_PATH = ROOT_PATH + '/dist/css/component.css';

var css = fs.readFileSync(INPUT_PATH);

postcss(require('postcss-use')({
  modules: [
  'precss'
  ]}))
.process(css, { from:  INPUT_PATH, to: OUTPUT_PATH })
.then(function (result) {
    fs.writeFileSync(OUTPUT_PATH, result.css);
});
