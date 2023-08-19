const btnWatched = document.querySelector(".button__watched");
const btnQueue = document.querySelector(".button__queue");


const handlerShowWatched = () =>{

    const watched = document.querySelector(".imagenes");
    // console.log(watched);
    watched.innerHTML = '';
    
    const storage = JSON.parse(localStorage.getItem("moviesWatched"));

    storage.forEach(element => {
        let ilImg = document.createElement('li');
        ilImg.classList.add('divImg');
        watched.append(ilImg);
        
        let img = document.createElement('img');
        img.src = element.img;
        ilImg.append(img);
        
        let imgName = document.createElement('p');
        imgName.textContent = element.imgName;
        imgName.classList.add('imgName');
        ilImg.append(imgName);

        let releaseYear = document.createElement('p');
        releaseYear.textContent = element.releaseYear;
        releaseYear.classList.add('imgDate');
        ilImg.append(releaseYear);

        let idmovie = document.createElement('p');
        idmovie.textContent = element.idmovie;
        idmovie.classList.add('idmovie-hidden');
        ilImg.append(idmovie);
    });

};


const handlerShowbtnQueue = () =>{

    const queue = document.querySelector(".imagenes");
    queue.innerHTML = '';
    
    const storage = JSON.parse(localStorage.getItem("moviesQueue"));

    storage.forEach(element => {
        let ilImg = document.createElement('li');
        ilImg.classList.add('divImg');
        queue.append(ilImg);
        
        let img = document.createElement('img');
        img.src = element.img;
        ilImg.append(img);
        
        let imgName = document.createElement('p');
        imgName.textContent = element.imgName;
        imgName.classList.add('imgName');
        ilImg.append(imgName);

        let releaseYear = document.createElement('p');
        releaseYear.textContent = element.releaseYear;
        releaseYear.classList.add('imgDate');
        ilImg.append(releaseYear);

        let idmovie = document.createElement('p');
        idmovie.textContent = element.idmovie;
        idmovie.classList.add('idmovie-hidden');
        ilImg.append(idmovie);

    });

};

btnWatched.addEventListener("click", handlerShowWatched);
btnQueue.addEventListener("click", handlerShowbtnQueue);

