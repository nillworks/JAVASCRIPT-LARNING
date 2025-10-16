//* Js Project Build and Logic Build & Move manea.
import { getMovieReviewData } from './data.js';

function init() {
  const moveiereviewData = getMovieReviewData();
  painSatiatice(moveiereviewData);
}
function painSatiatice(moveiereviewData) {
  const flatMoveiReviwData = moveiereviewData.flat();
  const totalMoveiReviw = moveiereviewData.length;
  const totalMovieRatingData = flatMoveiReviwData.reduce((acc, item) => {
    return acc + item.rating;
  }, 0);
  const totalMovieAVGReting = (totalMovieRatingData / totalMoveiReviw).toFixed(
    2
  );
  const totalMovieRatingDataNumData = parseInt(totalMovieAVGReting);

  // Dom Melopaketion

  const totalMoviesEl = document.getElementById('tMoviesId');
  assStat(totalMoviesEl, totalMoveiReviw);

  const totalMoviesReviewEl = document.getElementById('tAvgRetingId');
  assStat(totalMoviesReviewEl, totalMovieRatingData);

  const totalMoviesReviewAvgEl = document.getElementById('tReviewasId');
  assStat(totalMoviesReviewAvgEl, totalMovieRatingDataNumData);

  function assStat(elem, value) {
    const spanEl = document.createElement('span');
    spanEl.classList.add('text-10xl');
    spanEl.innerText = value;
    elem.appendChild(spanEl);
  }
}

init();
