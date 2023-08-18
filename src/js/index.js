const config = {
  method: 'get',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGRiZWY2YTFjOWIyN2E3MDMxMjlhYzNjYWI1Njg3NCIsInN1YiI6IjY0ZDc4OWE2ZjE0ZGFkMDBjNmY4OWYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WOzD3u8rGMt6ZD7EBNTm1yebNIP2CPIdxxC_lroP4TY',
  },
};

const genres = [
  { name: 'Action & Adventure', id: 10759 },
  { name: 'Animation', id: 16 },
  { name: 'Comedy', id: 35 },
  { name: 'Crime', id: 80 },
  { name: 'Documentary', id: 99 },
  { name: 'Drama', id: 18 },
  { name: 'Family', id: 10751 },
  { name: 'Kids', id: 10762 },
  { name: 'Mystery', id: 9648 },
  { name: 'News', id: 10763 },
  { name: 'Reality', id: 10764 },
  { name: 'Sci-Fi & Fantasy', id: 10765 },
  { name: 'Soap', id: 10766 },
  { name: 'Talk', id: 10767 },
  { name: 'War & Politics', id: 10768 },
  { name: 'Western', id: 37 },
  { name: 'Action', id: 28 },
  { name: 'Adventure', id: 12 },
  { name: 'Animation', id: 16 },
  { name: 'Comedy', id: 35 },
  { name: 'Crime', id: 80 },
  { name: 'Documentary', id: 99 },
  { name: 'Drama', id: 18 },
  { name: 'Family', id: 10751 },
  { name: 'Fantasy', id: 14 },
  { name: 'History', id: 36 },
  { name: 'Horror', id: 27 },
  { name: 'Music', id: 10402 },
  { name: 'Mystery', id: 9648 },
  { name: 'Romance', id: 10749 },
  { name: 'Science Fiction', id: 878 },
  { name: 'TV Movie', id: 10770 },
  { name: 'Thriller', id: 53 },
  { name: 'War', id: 10752 },
  { name: 'Western', id: 37 },
];

let page = 5;

function toggleModal() {
  const modal = document.querySelector('[data-modal]');
  modal.classList.toggle('is-hidden');
}

function fetchAndDisplayData(page) {
  //   console.log('Fetching data for page:', page);
  fetch(
    `https://api.themoviedb.org/3/trending/all/day?page=${page}&language=en-US`,
    config
  )
    .then(response => response.json())
    .then(data => {
      const imagenes = document.querySelector('.imagenes');
      imagenes.innerHTML = '';
      let thePage = page;

      for (const item of data.results) {
        let img = document.createElement('img');
        img.src = 'https://image.tmdb.org/t/p/w500' + item.poster_path;

        
        let modalMovies = document.querySelector('.modalMovies');
        img.addEventListener('click', () => {
          toggleModal();
          
          let modalImg = modalMovies.querySelector('.modalImg'); 
          modalImg.src = 'https://image.tmdb.org/t/p/w500' + item.poster_path;

          let idMovie = modalMovies.querySelector('.idmovie');
          idMovie.textContent = item.id;

          let idPage = modalMovies.querySelector('.idpage');
          idPage.textContent = thePage;

          let modalTitle = modalMovies.querySelector('.modalTitle');
          modalTitle.textContent =
            item.title && item.name
              ? item.title + ' | ' + item.name
              : item.title || item.name || 'No Title or Name Available';

          let modalData = modalMovies.querySelector('.modaData');
          modalData.textContent =
            'Vote/Votes\nPopularity\nOriginal Title\nGenre';

          let modalDataValue = modalMovies.querySelector('.modaDataValue');
          modalDataValue.textContent = `${item.popularity}\n${item.original_title}\n${imgDate.textContent}`;

          let vote = modalMovies.querySelector('.vote');
          vote.textContent = item.vote_average.toFixed(1);

          let votes = modalMovies.querySelector('.votes');
          votes.textContent = '/' + ' ' + ' ' + item.vote_count;

          let modalDataoverview = modalMovies.querySelector('.modaDataoverview');
          modalDataoverview.textContent = item.overview;

          let modalDataButton1 = modalMovies.querySelector('.modalDataButton1');
          modalDataButton1.textContent = 'ADD TO WHATCHED';

          let modalDataButton2 = modalMovies.querySelector('.modalDataButton2');
          modalDataButton2.textContent = 'ADD TO QUEUE';

          let release = modalMovies.querySelector('.releaseYear');
          release.textContent =
          genero1Name +
          ',' +
          ' ' +
          genero2Name +
          ' ' +
          '|' +
          ' ' +
          releaseYear +
          airYear;
        });

        let divImg = document.createElement('div');
        divImg.classList.add('divImg');
        img.setAttribute('data-modal-open', 'true');
        imagenes.append(divImg);
        divImg.append(img);

        let imgName = document.createElement('p');
        imgName.textContent =
          item.title && item.name
            ? item.title + ' | ' + item.name
            : item.title || item.name || 'No Title or Name Available';
        imgName.classList.add('imgName');
        divImg.append(imgName);

        let imgDate = document.createElement('p');
        let releaseYear = item.release_date
          ? item.release_date.substring(0, 4)
          : '';
        let airYear = item.first_air_date
          ? item.first_air_date.substring(0, 4)
          : '';
        let genero1 = genres.find(genre => genre.id === item.genre_ids[0]);
        let genero2 = genres.find(genre => genre.id === item.genre_ids[1]);
        let genero1Name = genero1 ? genero1.name : '';
        let genero2Name = genero2 ? genero2.name : '';
        imgDate.textContent =
          genero1Name +
          ',' +
          ' ' +
          genero2Name +
          ' ' +
          '|' +
          ' ' +
          releaseYear +
          airYear;
        imgDate.classList.add('imgDate');
        divImg.append(imgDate);

      }

      // ... (creación de botones de página)
      let botones = document.querySelector('.botones');
      let lastButton = document.querySelector('.lastButton');
      botones.innerHTML = '';
      lastButton.innerHTML = '';

      for (let i = 0; i < 6; i++) {
        if (page < 4) {
          page = 4;
        }

        if (i === 5) {
          let buttonPage = document.createElement('button');
          buttonPage.classList.add('button-pages');
          const pageNumber = page + i;
          buttonPage.textContent = pageNumber;
          buttonPage.addEventListener('click', () => {
            page = pageNumber;
            fetchAndDisplayData(page);
            buttonPage1.classList.remove('button-pages-select');
            buttonPage1.classList.add('button-pages');
          });
          lastButton.append(buttonPage);
        } else {
          let buttonPage = document.createElement('button');
          buttonPage.classList.add('button-pages');
          const pageNumber = page - 2 + i;
          buttonPage.textContent = pageNumber;
          buttonPage.addEventListener('click', () => {
            page = pageNumber;
            fetchAndDisplayData(page);
            buttonPage1.classList.remove('button-pages-select');
            buttonPage1.classList.add('button-pages');
          });
          botones.append(buttonPage);
        }
        let selectButtons = document.querySelectorAll('.button-pages');
        for (const button of selectButtons) {
          if (parseInt(button.textContent) === thePage) {
            button.classList.remove('button-pages');
            button.classList.add('button-pages-select');
          } else {
            button.classList.remove('button-pages-select');
            button.classList.add('button-pages');
          }
        }
      }
    })
    .catch(error => console.error('Error:', error));
}

let buttonClose = document.querySelector('.boton-cerrar'); 
buttonClose.addEventListener('click', () => {
  toggleModal();
});

let buttonPage1 = document.querySelector('.firstButton');
buttonPage1.addEventListener('click', () => {
  fetchAndDisplayData(1);
});

let buttonPageLeft = document.querySelector('.left-Button');
buttonPageLeft.addEventListener('click', () => {
  page = page - 1;
  fetchAndDisplayData(page);
});

let buttonPageRight = document.querySelector('.RightButton');
buttonPageRight.addEventListener('click', () => {
  page = page + 1;
  fetchAndDisplayData(page);
});


const searchInput = document.querySelector('.backdrop');
console.log(searchInput);
const keyHandler = (event) => {
  event.preventDefault();
  console.log(event);
  // if (event.code === "Escape") {
  //   console.log(event.code);
  //   toggleModal();
  // };
}
searchInput.addEventListener("keydown", keyHandler);

let searchButton = document.querySelector('.form__icon');
searchButton.addEventListener('click', () => {
  let searchInput = document.querySelector('.form__label1').value.toLowerCase();

  const apiKey = 'dddbef6a1c9b27a703129ac3cab56874'; 
  const baseUrl = 'https://api.themoviedb.org/3/search/movie';
  const apiUrl = `${baseUrl}?query=${searchInput}&api_key=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log('Resultados de búsqueda:', data.results);

      const imagenes = document.querySelector('.imagenes');
      imagenes.innerHTML = '';

      const thePage = data.page;
      for (const item of data.results) {
        let img = document.createElement('img');
        img.src = 'https://image.tmdb.org/t/p/w500' + item.poster_path;

        let modalMovies = document.querySelector('.modalMovies');
        img.addEventListener('click', () => {
          toggleModal();
          
          let modalImg = modalMovies.querySelector('.modalImg'); 
          modalImg.src = 'https://image.tmdb.org/t/p/w500' + item.poster_path;

          let idMovie = modalMovies.querySelector('.idmovie');
          idMovie.textContent = item.id;

          let idPage = modalMovies.querySelector('.idpage');
          idPage.textContent = thePage;

          let modalTitle = modalMovies.querySelector('.modalTitle');
          modalTitle.textContent =
            item.title && item.name
              ? item.title + ' | ' + item.name
              : item.title || item.name || 'No Title or Name Available';

          let modalData = modalMovies.querySelector('.modaData');
          modalData.textContent =
            'Vote/Votes\nPopularity\nOriginal Title\nGenre';

          let modalDataValue = modalMovies.querySelector('.modaDataValue');
          modalDataValue.textContent = `${item.popularity}\n${item.original_title}\n${imgDate.textContent}`;

          let vote = modalMovies.querySelector('.vote');
          vote.textContent = item.vote_average.toFixed(1);

          let votes = modalMovies.querySelector('.votes');
          votes.textContent = '/' + ' ' + ' ' + item.vote_count;

          let modalDataoverview = modalMovies.querySelector('.modaDataoverview');
          modalDataoverview.textContent = item.overview;

          let modalDataButton1 = modalMovies.querySelector('.modalDataButton1');
          modalDataButton1.textContent = 'ADD TO WHATCHED';

          let modalDataButton2 = modalMovies.querySelector('.modalDataButton2');
          modalDataButton2.textContent = 'ADD TO QUEUE';

          let release = modalMovies.querySelector('.releaseYear');
          release.textContent =
          genero1Name +
          ',' +
          ' ' +
          genero2Name +
          ' ' +
          '|' +
          ' ' +
          releaseYear +
          airYear;
        });

        let divImg = document.createElement('div');
        divImg.classList.add('divImg');
        img.setAttribute('data-modal-open', 'true');
        imagenes.append(divImg);
        divImg.append(img);

        let imgName = document.createElement('p');
        imgName.textContent =
          item.title && item.name
            ? item.title + ' | ' + item.name
            : item.title || item.name || 'No Title or Name Available';
        imgName.classList.add('imgName');
        divImg.append(imgName);

        let imgDate = document.createElement('p');
        let releaseYear = item.release_date
          ? item.release_date.substring(0, 4)
          : '';
        let airYear = item.first_air_date
          ? item.first_air_date.substring(0, 4)
          : '';
        let genero1 = genres.find(genre => genre.id === item.genre_ids[0]);
        let genero2 = genres.find(genre => genre.id === item.genre_ids[1]);
        let genero1Name = genero1 ? genero1.name : '';
        let genero2Name = genero2 ? genero2.name : '';
        imgDate.textContent =
          genero1Name +
          ',' +
          ' ' +
          genero2Name +
          ' ' +
          '|' +
          ' ' +
          releaseYear +
          airYear;
        imgDate.classList.add('imgDate');
        divImg.append(imgDate);
      }// Cierre del evento click para la imagen
       // Cierre del ciclo for
    }) // Cierre del segundo .then
    .catch(error => {
      console.error('Error:', error);
    });
}); // Cierre del evento click para el botón searchButton



fetchAndDisplayData(page);






