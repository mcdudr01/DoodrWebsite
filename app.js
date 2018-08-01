// Log to console
console.log('Hello Console from app.js!'); // string
console.log(123); // int
console.log(false); // boolean
var greeting = 'Hello';
console.log(greeting); // variable
console.log([1,2,3,4]); // array
console.log({a:1, b:2}); // object literal
console.table({a:1, b:2}); // print above as a table

console.error('This is some error. Uh oh!');
//console.clear(); // clears console
console.warn('This is a warning! Such yellow, wow'); // warning

console.time('identifier'); // time how long the following section takes
  console.log('time me!');
  console.log('time me!');
  console.log('time me!');
  console.log('time me!');
console.timeEnd('identifier');

/*
  multi
  line
  yey
*/