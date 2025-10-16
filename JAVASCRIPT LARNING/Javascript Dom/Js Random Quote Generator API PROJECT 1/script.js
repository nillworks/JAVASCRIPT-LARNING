const randomQuote = [
  'Quality is not an act, it is a habit',
  'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.',
  'Life is 10% what happens to you and 90% how you react to it.',
  'If you are going through hell, keep going.',
  'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
  'With the new day comes new strength and new thoughts.',
];

const containerElement = document.querySelector('#conrainer');

const quoteElement = document.querySelector('#Quote');
const auterElement = document.querySelector('#auter');
const button = document.querySelector('#button');

function atuoQuote() {
  const randomNumber = Math.floor(Math.random() * randomQuote.length);
  quoteElement.textContent = randomQuote[randomNumber];
}
atuoQuote();

console.log(randomQuote);
button.addEventListener('click', atuoQuote);
