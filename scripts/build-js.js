// BUILD JS
// ================

// Fetch dependencies
var webpack = require('webpack');
var componentName = require('../package.json').name;
var path = require('path');
var config = require('../webpack.config.js');

// Path consts
var ROOT_PATH = path.dirname(__dirname);
var FILE_NAME = 'component.js';
var INPUT_PATH = ROOT_PATH + '/src/js/' + FILE_NAME;
var OUTPUT_PATH = ROOT_PATH + '/dist/js/';

// Compile es6 modules
var compiler = webpack(config).run(function(err, stats) {});
