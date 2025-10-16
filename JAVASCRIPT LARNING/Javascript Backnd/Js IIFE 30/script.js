// Js IIFE 30

const afunction = function (a, b) {
  console.log(`afunction sum: ${a * b}`);
};
afunction(23, 32);

// IIFE USE

(function sumEcoal(a, b) {
  console.log(`sumEcoal is: ${a / b}`);
})(231, 33);

((b, a, c, d) => console.log(`total sum is: ${a + b + c + d}`))(
  63,
  43,
  45,
  5,
  676
);

// dom
// const h2Stor = document.querySelector('.h2');
// const h4Stor = document.querySelector('.h4');
// h2Stor.style.backgroundColor = 'red';
// h4Stor.style.backgroundColor = '#ddd';

(function () {
  const h2Stor = document.querySelector('.h2');
  const h4Stor = document.querySelector('.h4');
  h2Stor.style.backgroundColor = 'red';
  h4Stor.style.backgroundColor = '#ddd';
})();

// variable Storage IFFE

const variableStor = (a => {
  const privitVrable = a * a;
  console.log(`Ecoal is: ${privitVrable}`);
  return {
    functionName: function (a, b) {
      const sum = a + b + privitVrable;
      const gon = a * b + privitVrable;
      return {
        sumResult: sum,
        multiplyResult: gon,
      };
    },
  };
})(5);
const stor = variableStor.functionName(12, 32);
console.log(stor.multiplyResult);
console.log(stor.sumResult);
