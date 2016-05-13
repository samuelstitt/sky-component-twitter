
// import component helpers for use in the tests
import * as helper from '../../src/js/utils/helpers';

// test the myHelper module export
describe('myHelper', function() {

  // check function exists in window
  it('exists as a function', function() {
    expect(typeof helper.myHelper).toEqual('function');
  });

});
