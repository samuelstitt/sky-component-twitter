// fetch dependencies
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var fs = require('fs');
var handlebars = require('handlebars');
var filepath = require('path');

// filepath consts
var ROOT = filepath.dirname(__dirname);
var PATH_TO_TEMPLATE = ROOT + '/src/templates/component.hbs';
var PATH_TO_DATA = ROOT + '/tests/component.json';

// compile component
var component = fs.readFileSync(PATH_TO_TEMPLATE).toString();
var data = require(PATH_TO_DATA);
var compiledComponent = handlebars.compile(component);
var compiledComponentHTML = compiledComponent(data);

// build a simple server
var http = require('http');
var port = 8000;
var server = http.createServer(function(request, response) {
  response.writeHeader(200, {'Content-Type': 'text/html'});
  response.write(compiledComponentHTML);
  response.end();
});

// configure the test environment
var jasmineBeforeAll = require('jasmine-before-all');
function setupTestServer(portNumber) {
  beforeAll(function() {
    server.listen(portNumber);
  });

  afterAll(function() {
    server.close();
  });
}

// configure the test browsers
function setupTests(url) {
  beforeEach(function(done) {
    this.driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

    this.driver.get(url).then(done);
  });

  afterEach(function(done) {
    this.driver.quit().then(done);
  });
}


// run tests with test data
describe('Component', function() {

  setupTestServer(port);
  setupTests('http://localhost:' + port);

  it('should have the correct data-component-name', function(done) {
    var element = this.driver.findElement(webdriver.By.css('.sky-component-twitter'));
    element.getAttribute('data-component-name').then(function(id) {
      expect(id).toBe('sky-component-twitter');
      done();
    });
  });

});
