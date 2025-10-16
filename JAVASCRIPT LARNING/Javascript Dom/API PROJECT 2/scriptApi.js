// Image API
const imgContainer = document.querySelector('#img_container');
const urlApi = 'https://picsum.photos/v2/list';
const kyeApi = '';

const getpicture = () => {
  fetch(urlApi)
    .then(data => data.json())
    .then(item => {
      console.log(item);
      item.forEach(PhOBJ => {
        const newContainer = document.createElement('div');
        newContainer.classList.add('img_container_item');

        const newImg = document.createElement('img');
        newImg.src = PhOBJ.download_url;
        newContainer.appendChild(newImg);

        const newP = document.createElement('p');
        newP.textContent = PhOBJ.author;
        newContainer.appendChild(newP);

        imgContainer.appendChild(newContainer);
      });
    });
};
getpicture();
