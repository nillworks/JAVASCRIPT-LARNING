// Js loop
let car = ['BMW', 'VOLVO', 'Toyots', 'ford', 'tesla', 'marctice'];

car.push('8ty');

// console.log(car[0]); //! aivabe lakbo na
// console.log(car[3]);

// for (let i = 0; i < car.length; i++) {
//   console.log(car[i]);
// }

// For In Loop
let person = {
  name: 'shipon',
  age: 30,
  detOfBerth: '20/05/2008',
};

// for (let i in person) {
//   let capLetter = i.charAt(0).toLocaleUpperCase() + i.slice(1);
//   console.log(capLetter + ': ' + person[i]);
// }

// For Each method
car.forEach(function (i) {
  console.log(i);
});

// for of Mathor

for (let i of car) {
  console.log(i);
}

// While Loop

let num = 0;
while (num < 10) {
  console.log(num);
  num++;
}

//  array ty while loop baboher kora jai aivabe
let car3 = ['BMW', 'Toyota', 'Tesla', 'Honda'];
let f = 0;

while (f < car3.length) {
  console.log(car3[f]);
  f++;
}
