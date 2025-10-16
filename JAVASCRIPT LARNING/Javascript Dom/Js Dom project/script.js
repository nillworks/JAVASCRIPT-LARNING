//  js Dom project
const body = document.getElementById('body');
const button = document.querySelectorAll('li');
const rendomBtn = document.querySelector('rendomColors');

// const red = document.querySelector('.red');
// red.addEventListener('click', () => {
//   body.style.backgroundColor = 'red';
// });

// console.log(red);

// button.forEach(valuse => {
//   valuse.addEventListener('click', function () {
//     // normal function
//     let className = this.classList.value;
//     body.style.backgroundColor = className;
//     console.log(className);
//   });
// });

button.forEach(valuse => {
  valuse.addEventListener('click', function () {
    // normal function
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    let className = this.classList[0];
    let color = '';
    if (className === 'red') {
      color = '#c0392b';
    }
    if (className === 'green') {
      color = '#2ecc71';
    }
    if (className === 'blue') {
      color = '#0652dd';
    }
    if (className === 'pink') {
      color = '#d6a2e8';
    }
    if (className === 'rendomColors') {
      color = randomColor;
    }
    body.style.backgroundColor = color;
    console.log(className);
    console.log(color);
  });
});
