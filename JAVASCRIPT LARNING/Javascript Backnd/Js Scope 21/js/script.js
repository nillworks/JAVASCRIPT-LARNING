// Js scope
let car = 'bently';

console.log(car);

// Block scope

if (true) {
  let bike = 'R15';
  console.log(car);
  console.log(bike);
}
// console.log(bike);

// function scope
function Fname() {
  let bColer = 'black100';
  console.log(bColer);
  function fruits() {
    let mango = 'Mango is may loves';
    console.log(mango);
    console.log(bColer);
  }
  // console.log(mango); // aita neca dice aijono error asce

  fruits();
}
Fname();
