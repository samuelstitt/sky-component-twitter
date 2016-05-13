// grab all the files in this directory ending in *.test.js and compile them for testing
var context = require.context('./', true, /\.test\.js$/);
context.keys().forEach(context);

// grab all the files in the utils directory ending in *.test.js and compile them for testing
var contextUtils = require.context('./utils/', true, /\.test\.js$/);
contextUtils.keys().forEach(contextUtils);
