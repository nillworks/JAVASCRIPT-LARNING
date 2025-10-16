// Js Arrays
// js 2 vaba Array naoa jai aivabe
/*
const language = [
  'html',
  'css',
  'scss',
  'javascript',
  true,
  30,
  'php',
  'python',
  'c++',
];

const language2 = new Array('html', 'css', 'scss', 'javascript', true, 30);
*/
const language = [
  'html',
  'css',
  'scss',
  'javascript',
  true,
  30,
  'php',
  'python',
  'c++',
];
language[9] = 599;
language[4] = false;

console.log(
  language[length - 1]
); /* ai ta dorker hobe onek akjakly rejelt paber jono */

// console.log(typeof language);

// console.log(language.length);
// console.log(language.toString());

// console.log(language[1]);
console.log(language);

// joiner bepere ta bojbo amrea

console.log(
  language.join(' * ')
); /* aita onke impten problaam solvling ar jono*/

console.log(language.toString());

// add last itams
language.push('shiponroy');

// Delet ar remove last itam
language.pop();

// add frist itams
language.unshift('heloo shipon');

// frist itams removes

language.shift();

// aivabe arrays 2 ta add korty hoy
const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];
const finalUtpot = x.concat(y);

console.log(finalUtpot);

// importent

// arrraus ar vetore kono kico add korty chila aivabe baboher korbo
language.splice(2, 0, 'infu', 'infu2');
console.log(language);

// arrraus ar vetore kono kico removes korty chila aivabe baboher korbo
language.splice(0, 2);
