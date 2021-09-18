// CommonJS, every file in node is a module (by default)
// Modules - Encapsulated code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

// console.log(names); // { john: 'John', peter: 'peter' }
// console.log(sayHi); // [Function: sayHi]
// console.log(data); // {items: ['item1', 'item2'], singlePerson: {name: 'bob' }}

sayHi("vishal");
sayHi(names.john);
sayHi(names.peter);
