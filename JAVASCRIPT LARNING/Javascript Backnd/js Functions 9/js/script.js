// Javascript Function

// Code-driven Invocation

/*
function myfunction(fullName, age, dateOffBarth = 1089) {
  console.log(
    'my Full Name is ' +
      fullName +
      'i am ' +
      age +
      ' years olld ' +
      ' My deta off berth is ' +
      dateOffBarth
  );
}
myfunction('shipon ', 18, 2004);
myfunction('nill ', 18, 2007);

*/

// Funtion use btn

// Event - Driven Invocation
function mynewfunction() {
  console.log('yes');
}
mynewfunction();

document.getElementById('btn').addEventListener('click', mynewfunction);

// Automatic( Self-Incoked ) invocation .

(function (massage) {
  console.log('i am self involeing function', massage);
})('hello');

//
let maths = function (x, y) {
  return x * y;
};
console.log(maths(4, 5));

//
// let newnamber = [4, 5, 6, 7, 8, 9];
// let sqnamber = newnamber.map(function (namber) {
//   return namber * namber;
// });
// console.log(sqnamber);

// Aro function .
let add = (x, y) => x * y;

console.log(add(4, 8));

// constator object

function Person() {
  (this.fristName = 'shipon'), (this.lastName = 'nill');
}

const person1 = new Person();
console.log(person1);
