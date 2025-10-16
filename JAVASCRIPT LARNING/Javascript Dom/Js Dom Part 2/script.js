// Js Dom Part 2
const hedtitle = document.querySelector('h2');
// hedtitle.innerText = ' Nill Roy';
hedtitle.innerText = hedtitle.innerText + ' Nill Roy';
hedtitle.style.textAlign = 'center';

// text chang
const boxst = document.querySelectorAll('.child_box');
boxst[0].innerText = '1';

let newNum = 1;
for (const i of boxst) {
  i.innerHTML = `${i.innerText} No: <span style="color:#8e44ad;">${newNum}</span>`;
  newNum++;
}

// button creates Element

const learnbtun = document.createElement('button');
learnbtun.innerText = 'Lern More';
learnbtun.style.color = 'white';

let hero = document.querySelector('.hero');
hero.append(learnbtun);
hero.prepend(learnbtun);
hero.after(learnbtun);
hero.before(learnbtun);

// Add Element

function addElement(nameMomu) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(nameMomu));
  document.querySelector('ul').appendChild(li);
}
addElement('contacet');
