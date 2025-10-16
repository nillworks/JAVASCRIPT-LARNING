// Js Higher Order Array Loop 26

const fruits = ['mango', 'orenge', 'apple', 'Banae'];
for (let i = 0; i < fruits.length; i++) {
  // console.log(fruits[i]);
}

for (const i of fruits) {
  // console.log(i);
}

const myName = 'shipon Roy';
for (const name of myName) {
  // console.log(name);
}

const country = new Map([
  ['Bn', 'bangladash'],
  ['in', 'inda'],
  ['Pk', 'pksthan'],
  ['Np', 'napl'],
]);

country.set('vu', 'votarn'); // aita dia map a add kory

for (const i of country) {
  // console.log(i);
}

for (const [key, value] of country) {
  // console.log(key, ':', value);
}

const myCountry = {
  Bn: 'bangladash',
  in: 'inda',
  Pk: 'pksthan',
  Np: 'napl',
};
//* object ar vitora for fo loop baboher korajabe na
//* sin Loop ar modo baboher kora jabe

for (const keys in myCountry) {
  // console.log(keys, ':', myCountry[keys]);
}

// for in loop baboher kory Array ke anty pare

for (const ret in fruits) {
  // console.log(fruits[ret]);
}

// ForEach matord
fruits.forEach(name2 => {
  console.log(name2);
});

// arry ar vetore Object nia kaj korbo

const stack = [
  {
    name: 'MERN STACK',
    property: 'Javascript , php ,laravel ,Mysql',
  },
  {
    name: 'Fontdend developer',
    property: 'Javascript , php ,laravel ,Mysql',
  },
  {
    name: 'MERN STACK',
    property: 'Javascript , php ,laravel ,Mysql',
  },
];

stack.forEach(Resselt => {
  console.log(`I want to learn ${Resselt.name} lern this ${Resselt.property}`);
});
