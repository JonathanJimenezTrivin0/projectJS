const e={method:"get",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGRiZWY2YTFjOWIyN2E3MDMxMjlhYzNjYWI1Njg3NCIsInN1YiI6IjY0ZDc4OWE2ZjE0ZGFkMDBjNmY4OWYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WOzD3u8rGMt6ZD7EBNTm1yebNIP2CPIdxxC_lroP4TY"}},t=[{name:"Action & Adventure",id:10759},{name:"Animation",id:16},{name:"Comedy",id:35},{name:"Crime",id:80},{name:"Documentary",id:99},{name:"Drama",id:18},{name:"Family",id:10751},{name:"Kids",id:10762},{name:"Mystery",id:9648},{name:"News",id:10763},{name:"Reality",id:10764},{name:"Sci-Fi & Fantasy",id:10765},{name:"Soap",id:10766},{name:"Talk",id:10767},{name:"War & Politics",id:10768},{name:"Western",id:37},{name:"Action",id:28},{name:"Adventure",id:12},{name:"Animation",id:16},{name:"Comedy",id:35},{name:"Crime",id:80},{name:"Documentary",id:99},{name:"Drama",id:18},{name:"Family",id:10751},{name:"Fantasy",id:14},{name:"History",id:36},{name:"Horror",id:27},{name:"Music",id:10402},{name:"Mystery",id:9648},{name:"Romance",id:10749},{name:"Science Fiction",id:878},{name:"TV Movie",id:10770},{name:"Thriller",id:53},{name:"War",id:10752},{name:"Western",id:37}];let n=5;function a(){let e=document.querySelector("[data-modal]");e.classList.toggle("is-hidden")}function o(n){fetch(`https://api.themoviedb.org/3/trending/all/day?page=${n}&language=en-US`,e).then(e=>e.json()).then(e=>{let i=document.querySelector(".imagenes");i.innerHTML="";let d=n;for(let n of e.results){let e=document.createElement("img");e.src="https://image.tmdb.org/t/p/w500"+n.poster_path;let o=document.querySelector(".modalMovies");e.addEventListener("click",()=>{a(),o.querySelector(".modalImg").src="https://image.tmdb.org/t/p/w500"+n.poster_path,o.querySelector(".idmovie").textContent=n.id,o.querySelector(".idpage").textContent=d,o.querySelector(".modalTitle").textContent=n.title&&n.name?n.title+" | "+n.name:n.title||n.name||"No Title or Name Available",o.querySelector(".modaData").textContent="Vote/Votes\nPopularity\nOriginal Title\nGenre",o.querySelector(".modaDataValue").textContent=`${n.popularity}
${n.original_title}
${s.textContent}`,o.querySelector(".vote").textContent=n.vote_average.toFixed(1),o.querySelector(".votes").textContent="/  "+n.vote_count,o.querySelector(".modaDataoverview").textContent=n.overview,o.querySelector(".modalDataButton1").textContent="ADD TO WHATCHED",o.querySelector(".modalDataButton2").textContent="ADD TO QUEUE",o.querySelector(".releaseYear").textContent=y+", "+g+" | "+c+m});let r=document.createElement("div");r.classList.add("divImg"),e.setAttribute("data-modal-open","true"),i.append(r),r.append(e);let l=document.createElement("p");l.textContent=n.title&&n.name?n.title+" | "+n.name:n.title||n.name||"No Title or Name Available",l.classList.add("imgName"),r.append(l);let s=document.createElement("p"),c=n.release_date?n.release_date.substring(0,4):"",m=n.first_air_date?n.first_air_date.substring(0,4):"",u=t.find(e=>e.id===n.genre_ids[0]),p=t.find(e=>e.id===n.genre_ids[1]),y=u?u.name:"",g=p?p.name:"";s.textContent=y+", "+g+" | "+c+m,s.classList.add("imgDate"),r.append(s)}let l=document.querySelector(".botones"),s=document.querySelector(".lastButton");l.innerHTML="",s.innerHTML="";for(let e=0;e<6;e++){if(n<4&&(n=4),5===e){let t=document.createElement("button");t.classList.add("button-pages");let a=n+e;t.textContent=a,t.addEventListener("click",()=>{o(n=a),r.classList.remove("button-pages-select"),r.classList.add("button-pages")}),s.append(t)}else{let t=document.createElement("button");t.classList.add("button-pages");let a=n-2+e;t.textContent=a,t.addEventListener("click",()=>{o(n=a),r.classList.remove("button-pages-select"),r.classList.add("button-pages")}),l.append(t)}for(let e of document.querySelectorAll(".button-pages"))parseInt(e.textContent)===d?(e.classList.remove("button-pages"),e.classList.add("button-pages-select")):(e.classList.remove("button-pages-select"),e.classList.add("button-pages"))}}).catch(e=>console.error("Error:",e))}document.querySelector(".boton-cerrar").addEventListener("click",()=>{a()});let r=document.querySelector(".firstButton");r.addEventListener("click",()=>{o(1)}),document.querySelector(".left-Button").addEventListener("click",()=>{o(n-=1)}),document.querySelector(".RightButton").addEventListener("click",()=>{o(n+=1)});const i=document.querySelector(".backdrop");window.addEventListener("keydown",e=>{"Escape"===e.code&&i.classList.add("is-hidden")}),document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault()}),document.querySelector(".form__icon").addEventListener("click",()=>{let e=document.querySelector(".form__label1").value.toLowerCase(),n=`https://api.themoviedb.org/3/search/movie?query=${e}&api_key=dddbef6a1c9b27a703129ac3cab56874`;fetch(n).then(e=>e.json()).then(e=>{console.log("Resultados de b\xfasqueda:",e.results);let n=document.querySelector(".imagenes");n.innerHTML="";let o=e.page;for(let r of e.results){let e=document.createElement("img");e.src="https://image.tmdb.org/t/p/w500"+r.poster_path;let i=document.querySelector(".modalMovies");e.addEventListener("click",()=>{a(),i.querySelector(".modalImg").src="https://image.tmdb.org/t/p/w500"+r.poster_path,i.querySelector(".idmovie").textContent=r.id,i.querySelector(".idpage").textContent=o,i.querySelector(".modalTitle").textContent=r.title&&r.name?r.title+" | "+r.name:r.title||r.name||"No Title or Name Available",i.querySelector(".modaData").textContent="Vote/Votes\nPopularity\nOriginal Title\nGenre",i.querySelector(".modaDataValue").textContent=`${r.popularity}
${r.original_title}
${s.textContent}`,i.querySelector(".vote").textContent=r.vote_average.toFixed(1),i.querySelector(".votes").textContent="/  "+r.vote_count,i.querySelector(".modaDataoverview").textContent=r.overview,i.querySelector(".modalDataButton1").textContent="ADD TO WHATCHED",i.querySelector(".modalDataButton2").textContent="ADD TO QUEUE",i.querySelector(".releaseYear").textContent=y+", "+g+" | "+c+m});let d=document.createElement("div");d.classList.add("divImg"),e.setAttribute("data-modal-open","true"),n.append(d),d.append(e);let l=document.createElement("p");l.textContent=r.title&&r.name?r.title+" | "+r.name:r.title||r.name||"No Title or Name Available",l.classList.add("imgName"),d.append(l);let s=document.createElement("p"),c=r.release_date?r.release_date.substring(0,4):"",m=r.first_air_date?r.first_air_date.substring(0,4):"",u=t.find(e=>e.id===r.genre_ids[0]),p=t.find(e=>e.id===r.genre_ids[1]),y=u?u.name:"",g=p?p.name:"";s.textContent=y+", "+g+" | "+c+m,s.classList.add("imgDate"),d.append(s)}}).catch(e=>{console.error("Error:",e)})}),o(n);
//# sourceMappingURL=index.cfeba75d.js.map