const latteImage = document.getElementById('div');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');

latteImage.addEventListener('click', () => {
  popup.style.display = "block";
});

closeBtn.addEventListener('click', () => {
  popup.style.display = "none";
});
console.log("hello");