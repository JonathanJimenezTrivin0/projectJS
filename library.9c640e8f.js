!function(){var e=document.querySelector(".button__watched"),t=document.querySelector(".button__queue");e.addEventListener("click",(function(){var e=document.querySelector(".watched");e.innerHTML="";var t=JSON.parse(localStorage.getItem("moviesWatched")),a=document.createElement("ul");a.classList.add("imagenes"),a.classList.add("list"),e.append(a),t.forEach((function(e){var t=document.createElement("li");t.classList.add("divImg"),a.append(t);var n=document.createElement("img");n.src=e.img,t.append(n);var c=document.createElement("p");c.textContent=e.imgName,c.classList.add("imgName"),t.append(c);var d=document.createElement("p");d.textContent=e.releaseYear,d.classList.add("imgDate"),t.append(d)}))})),t.addEventListener("click",(function(){var e=document.querySelector(".watched");e.innerHTML="";var t=JSON.parse(localStorage.getItem("moviesQueue")),a=document.createElement("ul");a.classList.add("imagenes"),a.classList.add("list"),e.append(a),t.forEach((function(e){var t=document.createElement("li");t.classList.add("divImg"),a.append(t);var n=document.createElement("img");n.src=e.img,t.append(n);var c=document.createElement("p");c.textContent=e.imgName,c.classList.add("imgName"),t.append(c);var d=document.createElement("p");d.textContent=e.releaseYear,d.classList.add("imgDate"),t.append(d)}))}))}();
//# sourceMappingURL=library.9c640e8f.js.map
