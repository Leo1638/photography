const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.gallery-grid img').forEach(image => {
    image.onclick = () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.getAttribute('data-full'); 
        caption.innerHTML = image.alt;
    };
});

const closeLightbox = () => {
    lightbox.style.display = 'none';
};

closeBtn.onclick = (e) => {
    e.stopPropagation(); 
    closeLightbox();
};

lightbox.onclick = (e) => {
    closeLightbox();
};

lightboxImg.onclick = (e) => {
    e.stopPropagation();
};

caption.onclick = (e) => {
    e.stopPropagation();
};

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeLightbox();
});