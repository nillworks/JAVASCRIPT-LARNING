// let num = 30.848484884;
// // if need round number
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));

// // Sqaer valuse dorker hoy taholy baboher korbo aigolo

// let num2 = 5;
// console.log(Math.pow(num2, 2));
// console.log(Math.pow(num2, 3));

// //  rout valuse dorker holy

// let num3 = 64;
// console.log(Math.sqrt(num3));

// // nagtive naumber na chai
// let num4 = -47;
// console.log(Math.abs(num4));

// // jodi math max emam namber dorker hoy

// let num5 = (1, 3, 4, 5, 6, 7, 8, 4, 3);

// console.log(Math.min(num5));

// //  pai ar man ber korty chily baboher
// console.log(Math.PI);

// math.rendoms namber

// console.log(Math.floor(Math.random().toFixed(2) * 1000));

// lodu apps
// let uperValuse = 6;
// let loerValuse = 1;

// let resultvaluse = Math.ceil(Math.random() * uperValuse);

// console.log(resultvaluse);

function rollDice() {
  let ramdomsnumber = Math.floor(Math.random() * 6) + 1;
  let imgsorch = 'img/' + ramdomsnumber + '.jpg';
  document.getElementById('ludo1').src = imgsorch;
}
