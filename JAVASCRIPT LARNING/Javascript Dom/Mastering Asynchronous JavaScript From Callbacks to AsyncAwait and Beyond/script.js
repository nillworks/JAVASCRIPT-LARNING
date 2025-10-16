let mathFuncton = new Promise((resolve, reject) => {
  let n = Math.floor(Math.random() * 10 + 1);
  console.log(n);
  if (n <= 5) {
    return resolve();
  } else {
    return reject();
  }
});
mathFuncton
  .then(() => {
    console.log('working');
  })
  .catch(() => {
    console.log('Not Working');
  });

//
// const randomUser = async function randomUser() {
//   let urlApi = await fetch('https://randomuser.me/api/');
//   let rowDate = await urlApi.json();
//   console.log(rowDate);
//   console.log(
//     `Name: ${rowDate.results[0].name.title} ${rowDate.results[0].name.first} ${rowDate.results[0].name.last}`
//   );
//   console.log(`Gender: ${rowDate.results[0].gender}`);
//   console.log(`Email: ${rowDate.results[0].email}`);
//   console.log(`Age: ${rowDate.results[0].dob.age}`);

//   const dateString = rowDate.results[0].dob.date;

//   const options = { year: 'numeric', month: 'long', day: '2-digit' };
//   const formattedDate = new Date(dateString).toLocaleDateString(
//     'en-GB',
//     options
//   );

//   console.log(`date: ${formattedDate}`);
// };
// randomUser();

let names = document.getElementById('Name');
let gender = document.getElementById('Gender');
let email = document.getElementById('Email');
let age = document.getElementById('Age');
let date = document.getElementById('date');
const button = document.getElementById('button');
const userForm = document.getElementById('userForm');

const domRendomApi = async function () {
  // Api Coll
  let urlApi = await fetch('https://randomuser.me/api/');
  let rowDate = await urlApi.json();
  console.log(rowDate);
  let user = rowDate.results[0];
  const dateString = user.dob.date;
  // posh
  names.value = `${user.name.title} ${user.name.first} ${user.name.last}.`;
  gender.value = `${user.gender}`;
  email.value = user.email;
  age.value = user.dob.age;
  date.value = new Date(dateString).toISOString().split('T')[0];
};
button.addEventListener('click', async () => {
  userForm.style.display = 'block';
  await domRendomApi();
});
