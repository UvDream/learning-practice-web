'use strict';

// src/foo.js
var foo = 'Hello world!';

var version = "0.0.1";

// src/main.js

function main () {
  console.log(foo);
  console.log('version ' + version);
}

module.exports = main;
