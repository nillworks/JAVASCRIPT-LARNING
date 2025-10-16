// Java script Loop Project

// Guess The Number Funtion

/*

function guessTheNumber(difficulty) {
  let randomNumber;
  let attanps = 0;
  let maxAttaps;
  let range;

  // set difficulty
  switch (difficulty) {
    case 'easy':
      range = 10;
      maxAttaps = 5;
      randomNumber = Math.floor(Math.random() * 10 + 1);
      console.log(randomNumber);
      break;
    case 'medim':
      range = 100;
      maxAttaps = 7;
      randomNumber = Math.floor(Math.random() * 100 + 1);
      console.log(randomNumber);
      break;
    case 'hard':
      range = 1000;
      maxAttaps = 10;
      randomNumber = Math.floor(Math.random() * 1000 + 1);
      console.log(randomNumber);
      break;
    default:
      console.error("invalid difficulty level 'easy' 'medim' 'hard' ");
  }
  // get user input check guess
  while (attanps < maxAttaps) {
    let guess = parseInt(
      prompt(
        `Guess a number between 1 and ${range} (inclusive) you have ${
          maxAttaps - attanps
        } attemps left`
      )
    );
    attanps++;

    if (guess === randomNumber) {
      console.log('congratutions!', attanps, 'attanps');
      break;
    } else if (guess < randomNumber) {
      console.log('too low. try again');
    } else console.log('Too High try again');

    if (maxAttaps === attanps) {
      console.log('sory you ran out of attenps. the namber was', randomNumber);
    }
  }
}

// Get user input deficulty
let difficulty = prompt(
  'choose difficulty ( easy, medim, hard )'
).toLocaleLowerCase();

guessTheNumber(difficulty);
// console.log(difficulty);

*/

//

//

//

//

//

//

//

//

// src pracice

function guessTheNumber2(deficultys) {
  let randomNumber2;
  let range2;
  let attemps1 = 0;
  let maxAtteps2;
  switch (deficultys) {
    case 'easy':
      range2 = 5;
      maxAtteps2 = 5;
      randomNumber2 = Math.floor(Math.random() * 10 + 1);
      console.log(randomNumber2);
      break;
    case 'medim':
      range2 = 7;
      maxAtteps2 = 7;
      randomNumber2 = Math.floor(Math.random() * 100 + 1);
      console.log(randomNumber2);
      break;
    case 'hard':
      range2 = 10;
      maxAtteps2 = 10;
      randomNumber2 = Math.floor(Math.random() * 1000 + 1);
      console.log(randomNumber2);
      break;
    default:
      console.error("invalid difficulty level 'easy' 'medim' 'hard' ");
  }
  while (attemps1 < maxAtteps2) {
    let guess2 = parseInt(
      prompt(
        `guess a number between 1 and ${range2} you have ${
          maxAtteps2 - attemps1
        } attemps`
      )
    );
    attemps1++;
    console.log(guess2);
    if (guess2 === randomNumber2) {
      console.log('congacolotion!');
      break;
    } else if (guess2 < randomNumber2) {
      console.log('TOO low you can try ageing');
    } else {
      console.log('too High you can try ageing');
    }

    if (maxAtteps2 === attemps1) {
      console.log('sory you ran out of attenps. the namber was', randomNumber);
    }
  }
}

let deficultys = prompt(
  "choose difficulty 'easy' 'medim' 'hard' "
).toLocaleLowerCase();

console.log(deficultys);
guessTheNumber2(deficultys);
