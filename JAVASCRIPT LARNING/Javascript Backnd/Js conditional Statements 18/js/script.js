// Js conditional Staatements

// let age = 10;

// if (age > 18) {
//   console.log('you can redy');
// } else {
//   console.log('you can not Redes');
// }

// * ai vabe tety pare sondor kora
let age = 10;

let isAdult = age > 18;

let adultMessage = 'You are ready to create a Google account.';
let underageMessage = 'You are not old enough (under 18).';
let fortyPlusMessage = 'You are above 40, special case for Google account.';

if (age > 40) {
  console.log(fortyPlusMessage);
} else if (age > 18) {
  console.log(adultMessage);
} else {
  console.log(underageMessage);
}

// best Pracktice code
// const newAge = 10;
// const massage =
//   newAge > 18
//     ? 'you can ready to create a google account.'
//     : 'you must be 18+ a google account.';

// console.log(massage);

let category = 'Motor Bike';
let carTypeMassage;

switch (category) {
  case 'car':
    carTypeMassage = 'this is a car';
    break;
  case 'Motor Bike':
    carTypeMassage = 'This is a motor Bike';
    break;
  default:
    carTypeMassage = 'unknoen';
}
console.log(carTypeMassage);
