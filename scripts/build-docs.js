var fs = require('fs');
var path = require('path');
var parse = require('json-schema-to-markdown');

var ROOT = path.dirname(__dirname);
var PATH_TO_SCHEMA = ROOT + '/tests/schema.json';

var schema = require(PATH_TO_SCHEMA);
var markdown = parse(schema);

fs.writeFile('../Data-Structure.md', markdown, function (err) {
  if(err){
    return console.log(err);
  }
});
