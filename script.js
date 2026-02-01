const weddingDate = new Date("May 16, 2026 19:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);

const images = [
  "img/foto1.jpg",
  "img/foto2.jpg",
  "img/foto3.jpg"
];

let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");

function showImage(index) {
  carouselImage.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}
function enterInvitation() {
  document.getElementById("welcome").classList.remove("active");
  document.getElementById("invitation").classList.add("active");
}
