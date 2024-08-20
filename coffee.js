const latteImages = document.querySelectorAll('.allpart'); 
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');


latteImages.forEach(latteImage => {
  latteImage.addEventListener('click', () => {
    popup.style.display = "block";
  });
});


closeBtn.addEventListener('click', (event) => {
  popup.style.display = "none";
  event.stopPropagation(); 
});


popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
