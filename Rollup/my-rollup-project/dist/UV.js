/*!
 * Vue.js v0.0.1
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Vue = factory());
}(this, function () { 'use strict';

  // src/foo.js
  var foo = 'Hello world!';

  var version = "0.0.1";

  // src/main.js

  function main () {
    console.log("测试",foo);
    console.log('version ' + version);
  }

  return main;

}));
