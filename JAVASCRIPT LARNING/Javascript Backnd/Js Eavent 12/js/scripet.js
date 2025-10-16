// Js Event

// onclick Function
function newFuntions() {
  // document.getElementById('text').innerHTML = 'Subscribed';
  document.getElementById('btn').innerHTML = 'Subscribed';
  document.getElementById('btn').style.backgroundColor = '#222222';
}

// onclick Function
function licked() {
  document.getElementById('like').innerHTML =
    '<i class="fa-solid fa-thumbs-up"></i> Liked';
  document.getElementById('like').style.backgroundColor = '#262626';
}

function kyespras() {
  document.getElementById('text').innerHTML = 'keys prass 🤫';
}

document.getElementById('likes').addEventListener('contextmenu', function () {
  document.getElementById('likes').innerHTML = 'likeda1';
});

// best Pratece code clike ar kaje

document.getElementById('likes1').addEventListener(
  'click',
  function (c) {
    document.getElementById('likes1').innerHTML =
      ' <i class="fa-solid fa-thumbs-up"></i> shiponroy';
  },
  true
);
