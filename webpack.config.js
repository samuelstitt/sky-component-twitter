// Fetch dependencies
var componentName = require('./package.json').name;

// Path consts
var FILE_NAME = 'component.js';
var INPUT_PATH = __dirname + '/src/js/' + FILE_NAME;
var OUTPUT_PATH = __dirname + '/dist/js/';

// configure webpack
module.exports = {
  moduleId: componentName,
  entry: INPUT_PATH,
  output: {
    path: OUTPUT_PATH,
    filename: FILE_NAME,
    library: componentName.replace(/-/g, '_'),
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel'
      }
    ]
  }
};
