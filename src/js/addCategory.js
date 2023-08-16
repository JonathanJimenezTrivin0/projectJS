const watched = document.querySelector(".modalDataButton1");
const queue = document.querySelector(".modalDataButton2");
const idmovie = document.querySelector(".idmovie");

const handlerWatched = (event) => {
    const movie = document.querySelector(".modal");
    let item = { 
        img: movie.querySelector(".modalImg").src,
        idmovie: movie.querySelector(".idmovie").textContent,
        imgName: movie.querySelector(".modalTitle").textContent,
        releaseYear: movie.querySelector(".releaseYear").textContent
        }

    if (localStorage.getItem("moviesWatched") == null){
        localStorage.setItem("moviesWatched", JSON.stringify([item]));
    }
    else {
        let storage = JSON.parse(localStorage.getItem("moviesWatched"));
        storage.push(item);
        localStorage.setItem("moviesWatched", JSON.stringify(storage));
        console.log(storage);
    }
};

const handlerQueue = (event) => {
    const movie = document.querySelector(".modal");
    let item = { 
        img: movie.querySelector(".modalImg").src,
        idmovie: movie.querySelector(".idmovie").textContent,
        imgName: movie.querySelector(".modalTitle").textContent,
        releaseYear: movie.querySelector(".releaseYear").textContent
        }

    if (localStorage.getItem("moviesQueue") == null){
        localStorage.setItem("moviesQueue", JSON.stringify([item]));
    }
    else {
        let storage = JSON.parse(localStorage.getItem("moviesQueue"));
        storage.push(item);
        localStorage.setItem("moviesQueue", JSON.stringify(storage));
        console.log(storage);
    }
};

watched.addEventListener("click", handlerWatched);
queue.addEventListener("click", handlerQueue);

// console.log(watched, queue);