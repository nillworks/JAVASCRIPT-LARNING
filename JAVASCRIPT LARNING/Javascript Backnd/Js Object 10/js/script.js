// jacascript Object 10

// kibabe samble nety hoy
// symbol sobsomi opory nety hoi
const newSamble = Symbol('ket1');

//

const mobileManuDettels = {
  // key valu
  brand: 'redmi',
  modale: 'Redmi 11 Prime',
  camara: ['14', '45', '35'],
  'camara is goood zome': 200,
  [newSamble]: 'ny ky q',
  brendFn: function () {
    return `This my phone ${this.brand} phone Model ${this.modale}`;
  },
};
mobileManuDettels.camara =
  '12 Mb'; /* sobsomi mone rakty hobe kye valo ching kooty holy Object ar neica lakta hobe */

console.log(mobileManuDettels.barnd);
console.log(
  mobileManuDettels['camara']
); /* maibabe nila obsoi '' kotason ar vitore nety hobe */
console.log(
  mobileManuDettels['camara is goood zome']
); /* maibabe bracket notation a baboher korty hoy */

// console.log(mobileManuDettels.hasOwnProperty('brand'));
// console.log(mobileManuDettels.hasOwnProperty('redmi'));

// console.log(mobileManuDettels[newSamble]);
// console.log(Object.keys(mobileManuDettels));
// console.log(Object.values(mobileManuDettels));

console.log(mobileManuDettels.brendFn());

const obj1 = {
  p: 1,
  q: 2,
  r: 3,
};
const obj2 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj3 = {
  x: 1,
  y: 2,
  z: 3,
};

const finalObj = Object.assign(obj1, obj2, obj3);
console.log(finalObj);
