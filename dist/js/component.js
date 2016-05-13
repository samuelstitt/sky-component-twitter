(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sky_component_twitter"] = factory();
	else
		root["sky_component_twitter"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _utilsHelpers = __webpack_require__(1);

	exports['default'] = function (rootElement, options) {

	  if (!rootElement) {
	    return;
	  }

	  function init(rootElement, options) {

	    // Start developing component here
	    // Where possible, functions should live
	    // in the utils folder and imported
	    (0, _utilsHelpers.myHelper)();
	  }

	  init(rootElement, options);
	};

	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	
	// this function will be exported and available in component.js
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.myHelper = myHelper;

	function myHelper() {

	  // Start developing component here
	  // Where possible, functions should live
	  // in the utils folder so they can be unit
	  // tested in isolation
	  console.log('myHelper was called.');
	}

/***/ }
/******/ ])
});
;