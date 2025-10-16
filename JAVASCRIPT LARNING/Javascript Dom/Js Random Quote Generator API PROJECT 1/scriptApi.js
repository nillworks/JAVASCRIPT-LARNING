// API PROJECT
const quoteElement = document.querySelector('#Quote');
const auterElement = document.querySelector('#auter');
const button = document.querySelector('#button');

const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
const keyAPI = 'kloeUuynSW6HMnrNJ0POpw==x3aIhMEcuocYDSZx';

const getQuote = () => {
  fetch(apiUrl, {
    headers: {
      'X-Api-Key': keyAPI,
    },
  })
    .then(data => data.json())
    .then(item => {
      // console.log(item[0]);
      quoteElement.textContent = item[0].quote;
      auterElement.textContent = item[0].author;
    });
};
getQuote();

button.addEventListener('click', getQuote);
