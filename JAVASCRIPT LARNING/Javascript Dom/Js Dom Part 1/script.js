// Js Dom Part 1

const customClassName = document.getElementsByClassName('nav_link');
const convertedCalssName = Array.from(customClassName);
const ul = document.querySelector('ul');
const box2 = document.getElementById('box');
const manuItems = document.querySelectorAll('a');
const box1 = document.querySelector('.box');

//

box1.style.backgroundColor = 'red';
box1.style.width = '200px';
box1.style.textAlign = 'center';
box1.style.color = 'white';
box1.style.fontSize = '30px';
box1.style.borderRadius = '30px';
box1.style.margin = '0 auto';
box1.style.padding = '20px 0';
box1.style.gap = '10px';

box2.style.backgroundColor = 'aqua';
box2.style.width = '200px';
box2.style.marginTop = '20px';
box2.style.textAlign = 'center';
box2.style.color = 'white';
box2.style.fontSize = '30px';
box2.style.borderRadius = '30px';
box2.style.margin = '0 auto';
box2.style.padding = '20px 0';

manuItems.forEach(i => {
  i.style.color = 'white';
  i.style.textDecoration = 'none';
  i.style.fontSize = '20px';
});

convertedCalssName.forEach(i => {
  i.style.backgroundColor = 'aqua';
  i.style.borderRadius = '10px';
  i.style.listStyle = 'none';
  i.style.width = '300px';
  i.style.margin = '0 auto';
  i.style.textAlign = 'center';
  ul.style.display = 'flex';
  ul.style.gap = '10px';
});

document.querySelector('.box').getAttribute('style');
