// Log to console
console.log('Hello Console from app.js!'); // string
console.log(123); // int
console.log(false); // boolean
var greeting = 'Hello'; // variable
console.log(greeting);
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

let name;
name = 'Bob';
console.log(name);
name = 'Sarah';

// can't do this
//const petname; 
//petname = Bessie;
const petname = 'Bessie';
console.log(petname);

const pet = {
  name: 'Kat',
  animal: 'Dog'
}
pet.animal = 'Cat';
console.log(pet);

const numbers = [1,2,3];
console.log(numbers);
numbers.push(4);
console.log(numbers);

let num1 = 3;
if(num1 % 2 == 0){
  console.log(num1 + ' is even')
} else {
  console.log(num1 + ' is odd');
}

//rand 0 - 10
console.log(Math.floor(Math.random() * 10 + 1));

//string methods
fname = 'bob';
lname = 'dylan';
console.log(fname + ' ' + lname);
fname += lname;
console.log(fname);
console.log('escape \"characters\" are \'neat\'');
console.log(fname.toUpperCase());
console.log(fname[3]);
console.log(fname.indexOf('d'));
console.log(fname.lastIndexOf('b'));
console.log(fname.charAt('2'));
console.log(fname.slice(0,3));
console.log(fname.slice(-5));
console.log(fname.split('o'));
console.log(fname.replace('bob', 'joe'));
console.log(fname.includes('j'));

function hello(){
  return 'hello';
}

// template literals
fname = 'Bob'
age = 55;
let html;
html = `
  <ul>
    <li>Name: ${fname}</li>
    <li>Last: ${lname}</li>
    <li>Age: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
    <li>func: ${hello()}</li>
    <li>math: ${2 + 2}</li>
  </ul>
`;
//document.body.innerHTML = html;