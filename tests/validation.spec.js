var fs = require('fs');
var filepath = require('path');

// filepath consts
var ROOT = filepath.dirname(__dirname);
var PATH_TO_DATA = ROOT + '/tests/component.json';
var PATH_TO_SCHEMA = ROOT + '/tests/schema.json';
var PATH_TO_JSCSRC = ROOT + '/.jscsrc';
var PATH_TO_SCRIPT = ROOT + '/src/js/component.js';


// ensure the component script is valid
describe('Component script', function() {

  it('should pass JSHint test', function(done) {

    var errorCount = 0;
    var jshint = require('jshint');
    var script = fs.readFileSync(PATH_TO_SCRIPT).toString();
    jshint.JSHINT(script, {'esnext': true});

    if (jshint.JSHINT.data().errors) {
      errorCount = jshint.JSHINT.data().errors.length;
    }

    expect(errorCount).toBe(0);
    done();
  });

  it('should conform to the JSCS standards', function(done) {

    var Checker = require('jscs');
    var checker = new Checker();
    var jscsrc = fs.readFileSync(PATH_TO_JSCSRC);
    checker.registerDefaultRules();

    checker.configure(JSON.parse(jscsrc));

    var errorCount = 0;
    var script = fs.readFileSync(PATH_TO_SCRIPT).toString();

    var results = checker.checkString(script);
    var errors = results.getErrorList();

    if (errors) {
      errorCount = errors.length;
    }

    results.getErrorList().forEach(function(error) {
      var colorizeOutput = true;
      console.log(results.explainError(error, colorizeOutput) + '\n');
    });

    expect(errorCount).toBe(0);
    done();
  });

});


// ensure the data is valid
describe('Data', function() {

  it('should conform to the JSON schema', function(done) {

    // validate data schema
    var Validator = require('jsonschema').Validator;
    var v = new Validator();
    var instance = require(PATH_TO_DATA);
    var schema = require(PATH_TO_SCHEMA);
    var result = v.validate(instance, schema);

    if (result.errors) {
      result.errors.forEach(function(error, i) {
        console.error('Error: ', error.stack);
      });
    }

    expect(result.valid).toBe(true);
    done();

  });

});
