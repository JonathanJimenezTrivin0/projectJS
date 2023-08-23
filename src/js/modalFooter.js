const modalFtr = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementsByClassName('close')[0];

openModalBtn.addEventListener('click', () => {
  modalFtr.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modalFtr.style.display = 'none';
});

window.addEventListener('click', event => {
  if (event.target === modalFtr) {
    modalFtr.style.display = 'none';
  }
});

// -------------------------------form
