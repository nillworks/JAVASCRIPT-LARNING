// Js Filter Map and reduce
const fruits = ['Mango', 'Banana', 'Orange', 'Graps'];
const country = new Map([
  ['Bn', 'Bangladesh'],
  ['In', 'India'],
  ['Pk', 'Pakistan'],
  ['Np', 'Nepal'],
]);

country.set('Bu', 'Butan');
const myCountry = {
  Bn: 'Bangladesh',
  In: 'India',
  Pk: 'Pakistan',
  Np: 'Nepal',
};

const stack = [
  {
    name: 'MERN Stack',
    property: 'Mongo, Express, React, Node',
    foundation: 'JavaScript',
    tranding: true,
    price: 5000,
  },
  {
    name: 'MEAN Stack',
    property: 'Mongo, Express, Angular, Node',
    foundation: 'JavaScript',
    tranding: false,
    price: 3000,
  },
  {
    name: 'Laravel',
    property: 'JavaScript, Vue, PHP, Laravel, MySQL',
    foundation: 'PHP',
    tranding: true,
    price: 4000,
  },
  {
    name: 'WordPress',
    property: 'JavaScript, PHP, WordPress, MySQL',
    foundation: 'PHP',
    tranding: false,
    price: 3500,
  },
];

// fruits.forEach(element => console.log(element));

//* spcike letter dea  words barkore ai vabe .startsWith
const fruitCapB = fruits.filter(fruitsC =>
  fruitsC.toLowerCase().startsWith('b')
);

//*  filter baboher kora lenth barkorbo kivabe.
const fruitsLen5 = fruits.filter(fruitsLenth => fruitsLenth.length === 6);

//* Incolod baboher kora spcipk word ar betorer Jode G letter take tobe oi word dakabo incolode baboher kora.
const fruitSterG = fruits.filter(fruitsG =>
  fruitsG.toLowerCase().includes('g')
);
console.log(fruitSterG);

// console.log(fruitCapB);
console.log(fruitsLen5);

//? Number ka filter korbo kivabe
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// Number filfer
const filterNum = numbers.filter(num1 => num1 < 5);
// console.log(filterNum);

// numbers map kore namber ke + - * / agolo korty parbo

const Mynum = numbers
  .map(num => num + 5)
  .map(num => num * 5)
  .map(num => num * 10)
  .filter(num => num <= 450);
console.log(Mynum);

//* FILTER ARRAY AR VETIORER OPJCET KA FILTER
const foundetionAr = stack.filter(sk => sk.foundation === 'PHP');
// console.log(foundetionAr);

// Reduce Use
const mayTotal = numbers.reduce((acc, curvalue) => acc + curvalue, 0);
console.log(mayTotal);

// console.log(mayTotal, `my accvalue ${acc} crant value ${curvalue}`);

const corcePrice = stack.reduce(
  (acc, carentValue) => acc + carentValue.price,
  0
);
console.log(corcePrice);
