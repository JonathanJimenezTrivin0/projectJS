const image = document.querySelector(".imagenes");

// function toggleModal() {
//     const modal = document.querySelector('[data-modal]');
//     modal.classList.toggle('is-hidden');
// }

// const config = {
//     method: 'get',
//     headers: {
//     accept: 'application/json',
//     Authorization:
//     'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGRiZWY2YTFjOWIyN2E3MDMxMjlhYzNjYWI1Njg3NCIsInN1YiI6IjY0ZDc4OWE2ZjE0ZGFkMDBjNmY4OWYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WOzD3u8rGMt6ZD7EBNTm1yebNIP2CPIdxxC_lroP4TY',
//     },
// };

// handlerShowMovie = (event) => {
//     const storage = JSON.parse(localStorage.getItem("moviesQueue"));
//     const elemt = storage.find(option => option.img == event.target.src);
//     // console.log(elemt);
//     fetch(
//         `https://api.themoviedb.org/3/trending/all/day?language=en-US`,
//         config
//     )
//     .then(response => response.json())
//     .then(data => {
//         const bd = data.results;
//         console.log(bd);
//         console.log(bd.find(option => option.id == elemt.id));
//         // console.log(data.results.find(option => option.id == elemt.id));
//     });
// };

// image.addEventListener("click", handlerShowMovie);
