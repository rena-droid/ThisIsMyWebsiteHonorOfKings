document.querySelector('.more').addEventListener('click', () => {
    alert('Fitur ini sedang dalam pengembangan!');
  });
  // Contoh animasi scroll ke bagian tertentu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Fungsi untuk mengganti konten berdasarkan lane yang dipilih
function selectLane(lane, heroName, heroRole, imagePath, videoPath) {
    // Update nama dan role hero
    document.getElementById('heroName').innerText = heroName;
    document.getElementById('heroRole').innerText = heroRole;

    // Update gambar hero
    document.getElementById('heroImage').src = imagePath;

    // Update video hero
    const videoElement = document.getElementById('heroVideo');
    videoElement.src = videoPath;
    videoElement.play();
}
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    document.querySelector('.carousel').style.transform = `translateX(-${currentSlide * 100}vw)`;
}

setInterval(showNextSlide, 5000);
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.visible = "true";
          }
        });
      },
      { threshold: 0.2 }
    );
  
    cards.forEach((card) => {
      observer.observe(card);
    });
  });entry.target.dataset.visible = "true";

  function loadMoreImages() {
    let gallery = document.getElementById("gallery");

    // Daftar gambar baru yang ingin ditampilkan
    let newImages = [
        "Image hero/Hero13.jpg",
        "Image hero/Hero14.jpg",
        "Image hero/Hero15.jpg",
        "Image hero/Hero16.jpg",
        "Image hero/Hero17.jpg",
        "Image hero/Hero18.jpg"
    ];

    // Loop untuk menambahkan gambar baru ke dalam gallery
    newImages.forEach(src => {
        let img = document.createElement("img");
        img.src = src;
        img.alt = "Gambar Baru";
        gallery.appendChild(img);
    });

    // Sembunyikan tombol setelah gambar dimuat
    document.querySelector(".load-more").style.display = "none";
}

  