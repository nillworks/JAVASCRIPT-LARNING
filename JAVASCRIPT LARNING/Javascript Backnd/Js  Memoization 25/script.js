// Js Memoization 25
'use strict';
function sqNum(num) {
  return num * num;
}

function memoization() {
  const cash = {};
  console.log(cash);
  return function (num) {
    if (num in cash) {
      console.log('turo valo');
      return cash[num];
    } else {
      const reuselt = sqNum(num);
      cash[num] = reuselt;
      console.log('cash in output');
      return reuselt;
    }
  };
}
const useToFunction = memoization();
console.log(useToFunction(5));
console.log(useToFunction(5));

// let n = 10;
// let start = 1;
// if (n >= start) {
//   for (let i = start; i <= n; i++) {
//     console.log(i);
//   }
// } else {
//   for (let i = start; i >= -n; i--) {
//     console.log(i);
//   }
// }

// let x = 6;
// let stert = 1;
// for (let i = 1; i <= x; i++) {
//   stert *= i;
//   console.log(i);
// }
// console.log('Factorial of', x, 'is:', stert);

function function3(n) {
  console.log(n);
  return n * n;
}
function3(5);
console.log(function3(5));

let y = 5;
let stert1 = 1;
for (let i = 1; i <= y; i++) {
  let sqer = i * i;
  console.log(sqer);
}
