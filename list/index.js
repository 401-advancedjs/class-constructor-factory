'use strict';

const List = require('./list-constructor.js');

let stuff = new List();
stuff.push(1);
stuff.push(2);
stuff.push(3);
console.log(stuff);

console.log(stuff.forEach(a => a*2));


