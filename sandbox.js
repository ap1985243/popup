const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const popclose = document.querySelector('.popup-close');

button.addEventListener('click', () => {
  popup.style.display = 'block';
});

popclose.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
  if(e.target.className === 'popup-wrapper'){
    popup.style.display = 'none';
  }
});