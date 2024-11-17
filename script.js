
function buyProduct(productName) {
   Swal.fire({
  icon: 'success',
  title: 'Terima kasih telah membeli ' + productName + '!',
  showConfirmButton: false,
  timer: 2000
});
}

document.addEventListener("DOMContentLoaded", () => {
    const infoSection = document.querySelector('.info');
    const ctaButton = document.querySelector('.cta-button');
    const scrollToTopButton = document.createElement('button');

    // Scroll ke bagian informasi
    ctaButton.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector('#learn-more');
        target.scrollIntoView({ behavior: 'smooth' });
    });

    // Animasi muncul untuk bagian informasi
    window.addEventListener('scroll', () => {
        const sectionPosition = infoSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            infoSection.classList.add('visible');
        }

        // Menampilkan tombol kembali ke atas
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Membuat tombol kembali ke atas
    scrollToTopButton.innerText = '↑';
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    // Fungsi untuk kembali ke atas
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// hyper UI

  

  