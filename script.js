const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close-btn');

// Open Lightbox
document.querySelectorAll('.gallery-grid img').forEach(image => {
    image.onclick = () => {
        lightbox.style.display = 'flex';
        // Loads the high-res version from data-full attribute
        lightboxImg.src = image.getAttribute('data-full'); 
        caption.innerHTML = image.alt;
    };
});

// Close Lightbox functions
const closeLightbox = () => {
    lightbox.style.display = 'none';
};

closeBtn.onclick = closeLightbox;

// Close on clicking the dark background
lightbox.onclick = (e) => {
    if (e.target === lightbox || e.target === closeBtn) {
        closeLightbox();
    }
};

// Close on Escape Key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeLightbox();
});
