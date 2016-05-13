// BUILD EXAMPLE
// ================

// fetch dependencies
var fs = require('fs');
var handlebars = require('handlebars');
var componentName = require('../package.json').name;
var path = require('path');

// path consts
var ROOT = path.dirname(__dirname);
var PATH_TO_TEMPLATE = ROOT + '/src/templates/component.hbs';
var PATH_TO_DATA = ROOT + '/scripts/example/example.json';
var PATH_TO_OUTPUT = ROOT + '/dist/example.html';
var PATH_TO_PREVIEW_HTML = ROOT + '/scripts/example/example.html';

// compile component
var component = fs.readFileSync(PATH_TO_TEMPLATE).toString();
var componentData = require(PATH_TO_DATA);
componentData['component-name'] = componentName;
var compiledComponent = handlebars.compile(component);
var compiledComponentHTML = compiledComponent(componentData);
var previewHTML = fs.readFileSync(PATH_TO_PREVIEW_HTML).toString();

// export example
fs.writeFileSync(PATH_TO_OUTPUT, previewHTML.replace(/#{component}/, compiledComponentHTML));
