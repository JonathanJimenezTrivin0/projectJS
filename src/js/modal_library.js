const image = document.querySelector(".imagenes");

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

const btnWatched = document.querySelector(".button__watched");
const btnQueue = document.querySelector(".button__queue");
let isWatched = false;
let isQueue = false;


function toggleModal() {
    const modal = document.querySelector('[data-modal]');
    modal.classList.toggle('is-hidden');
}

const options = {
method: 'GET',
headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2IxMmRlNzU3ZDg3NmIyNjY0ZWFjYzE0OTQzMDY1NCIsInN1YiI6IjY0ZGZkMDkwNWFiODFhMDBmZmMxZTJlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-QnlW9CUKAbJQk-rqR2PWRClOwb4rEGk6_5_LysamjU'
}
};

handlerShowMovie = (event) => {

    let storage;
    if (isWatched == true && isQueue == false){
        storage = JSON.parse(localStorage.getItem("moviesWatched"));
    }
    else if (isWatched == false && isQueue == true){
        storage = JSON.parse(localStorage.getItem("moviesQueue"));
    }
    const elemt = storage.find(option => option.img == event.target.src);
    
    fetch(
        `https://api.themoviedb.org/3/movie/${elemt.idmovie}?language=en-US`,
        options
    )
    .then(response => response.json())
    .then(data => {
        const item = data;
        toggleModal();   
        
        let modalImg = document.querySelector('.modalImg');
        modalImg.src = 'https://image.tmdb.org/t/p/w500' + item.poster_path;
        
        let idMovie = document.querySelector('.idmovie');
        idMovie.textContent = item.id;
        
        let idPage = document.querySelector('.idpage');
        idPage.textContent = elemt.idpage;
        
        let modalTitle = document.querySelector('.modalTitle');
        modalTitle.textContent =
        item.title && item.name
        ? item.title + ' | ' + item.name
        : item.title || item.name || 'No Title or Name Available';
        
        let modalData = document.querySelector('.modaData');
        modalData.textContent =
        'Vote/Votes\nPopularity\nOriginal Title\nGenre';
        
        let releaseYear = item.release_date
        ? item.release_date.substring(0, 4)
        : '';
        let airYear = item.release_date
        ? item.release_date.substring(0, 4)
        : '';
        let genero1 = genres.find(genre => genre.id === item.genres[0].id);
        let genero2 = genres.find(genre => genre.id === item.genres[1].id);
        let genero1Name = genero1 ? genero1.name : '';
        let genero2Name = genero2 ? genero2.name : '';
        let imgDate =
        genero1Name +
        ',' +
        ' ' +
        genero2Name +
        ' ' +
        '|' +
        ' ' +
        releaseYear +
        airYear;

        let modalDataValue = document.querySelector('.modaDataValue');
        modalDataValue.textContent = `${item.popularity}\n${item.original_title}\n${imgDate}`;
        
        let vote = document.querySelector('.vote');
        vote.textContent = item.vote_average.toFixed(1);
        
        let votes = document.querySelector('.votes');
        votes.textContent = '/' + ' ' + ' ' + item.vote_count;
        
        let modalDataoverview = document.querySelector('.modaDataoverview');
        modalDataoverview.textContent = item.overview;
        
        let modalDataButton1 = document.querySelector('.modalDataButton1');
        modalDataButton1.textContent = 'ADD TO WHATCHED';
        
        let modalDataButton2 = document.querySelector('.modalDataButton2');
        modalDataButton2.textContent = 'ADD TO QUEUE';
        
        let release = document.querySelector('.releaseYear');
        release.textContent = imgDate;
    });

};

let buttonClose = document.querySelector('.boton-cerrar'); 
buttonClose.addEventListener('click', () => {
    toggleModal();
});

btnWatched.addEventListener("click", () => {
    isWatched = true;
    isQueue = false;
});
btnQueue.addEventListener("click", () =>{
    isWatched = false;
    isQueue = true;
});

image.addEventListener("click", handlerShowMovie);
