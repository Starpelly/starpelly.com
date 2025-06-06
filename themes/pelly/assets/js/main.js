console.log('This site was generated by Hugo.');

const images = document.querySelectorAll('.clickable-image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const viewOriginal = document.getElementById('view-original');
const closeBtn = document.querySelector('.close');

images.forEach(img => {
  img.addEventListener('click', () => {
    const fullImg = img.getAttribute('data-full');
    lightboxImg.src = fullImg;
    viewOriginal.href = fullImg;
    lightbox.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});
