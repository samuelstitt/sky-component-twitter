import {myHelper} from './utils/helpers';

export default function(rootElement, options) {

  if (!rootElement) {
    return;
  }

  function init(rootElement, options) {

    // Start developing component here
    // Where possible, functions should live
    // in the utils folder and imported
    myHelper();

  }

  init(rootElement, options);

}
