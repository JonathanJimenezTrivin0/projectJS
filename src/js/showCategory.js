const btnWatched = document.querySelector(".button__watched");
const btnQueue = document.querySelector(".button__queue");


const handlerShowWatched = () =>{

    const watched = document.querySelector(".watched");
    watched.innerHTML = '';
    
    const storage = JSON.parse(localStorage.getItem("moviesWatched"));
    let ulImg = document.createElement('ul');
    ulImg.classList.add('imagenes');
    ulImg.classList.add('list');
    watched.append(ulImg);

    storage.forEach(element => {
        let ilImg = document.createElement('li');
        ilImg.classList.add('divImg');
        ulImg.append(ilImg);
        
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
    });

};


const handlerShowbtnQueue = () =>{

    const watched = document.querySelector(".watched");
    watched.innerHTML = '';
    
    const storage = JSON.parse(localStorage.getItem("moviesQueue"));
    let ulImg = document.createElement('ul');
    ulImg.classList.add('imagenes');
    ulImg.classList.add('list');
    watched.append(ulImg);

    storage.forEach(element => {
        let ilImg = document.createElement('li');
        ilImg.classList.add('divImg');
        ulImg.append(ilImg);
        
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
    });

};

btnWatched.addEventListener("click", handlerShowWatched);
btnQueue.addEventListener("click", handlerShowbtnQueue);

