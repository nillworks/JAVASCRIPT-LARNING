// BMI Calculator
const height = document.getElementById('height');
const weigth = document.getElementById('weight');
const button = document.getElementById('button');

let result = document.getElementById('result');
let score = document.getElementById('score');

button.addEventListener('click', () => {
  let newHeight = parseFloat(height.value);
  let newWeight = parseFloat(weigth.value);
  newHeight = newHeight / 100;
  let sqheight = newHeight * newHeight;
  let bMi = newWeight / sqheight;
  score.textContent = bMi.toFixed(2);
  result.style.display = 'block';
  console.log(bMi);
  if (score.textContent < 18.6) {
    score.style.color = 'red';
  } else if (score.textContent < 24.9) {
    score.style.color = '#27ae60';
  } else {
    score.style.color = 'green';
  }
});

// Form Defult value
let forms = document.getElementById('form');
forms.addEventListener('submit', e => {
  e.preventDefault();
});
