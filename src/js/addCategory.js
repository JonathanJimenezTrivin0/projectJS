import { Notify } from 'notiflix/build/notiflix-notify-aio';

const watched = document.querySelector(".modalDataButton1");
const queue = document.querySelector(".modalDataButton2");
const STORAGE_WATCHED = 'moviesWatched';
const STORAGE_QUEUE = 'moviesQueue';

const handlerWatched = () => {
    const movie = document.querySelector(".modalMovies");
    let item = { 
        img: movie.querySelector(".modalImg").src,
        idmovie: movie.querySelector(".idmovie").textContent,
        imgName: movie.querySelector(".modalTitle").textContent,
        releaseYear: movie.querySelector(".releaseYear").textContent
        }

    if (localStorage.getItem(STORAGE_WATCHED) == null){
        localStorage.setItem(STORAGE_WATCHED, JSON.stringify([item]));

        Notify.success("Added to Watched");
    }
    else {
        let storage = JSON.parse(localStorage.getItem(STORAGE_WATCHED));

        if (storage.find(option => option.idmovie == item.idmovie))
        {
            Notify.warning("Already moved to Watched");
            return;
        }
        storage.push(item);
        localStorage.setItem(STORAGE_WATCHED, JSON.stringify(storage));
        
        Notify.success("Added to Watched");
    }
};

const handlerQueue = () => {
    const movie = document.querySelector(".modalMovies");
    let item = { 
        img: movie.querySelector(".modalImg").src,
        idmovie: movie.querySelector(".idmovie").textContent,
        imgName: movie.querySelector(".modalTitle").textContent,
        releaseYear: movie.querySelector(".releaseYear").textContent
        }

    if (localStorage.getItem(STORAGE_QUEUE) == null){
        localStorage.setItem(STORAGE_QUEUE, JSON.stringify([item]));

        Notify.success("Added to Queue");
    }
    else {
        let storage = JSON.parse(localStorage.getItem(STORAGE_QUEUE));

        if (storage.find(option => option.idmovie == item.idmovie))
        {
            Notify.warning("Already moved to Queue");
            return;
        }
        storage.push(item);
        localStorage.setItem(STORAGE_QUEUE, JSON.stringify(storage));
        
        Notify.success("Added to Queue");
    }
};

watched.addEventListener("click", handlerWatched);
queue.addEventListener("click", handlerQueue);

// console.log(watched, queue);