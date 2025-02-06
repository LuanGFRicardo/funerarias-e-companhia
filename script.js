document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const prevButtons = document.querySelectorAll('.prev');
    const nextButtons = document.querySelectorAll('.next');
    let currentIndex = 0;

    function showGalleryItem(index) {
        galleryItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function showNextItem() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        showGalleryItem(currentIndex);
    }

    function showPrevItem() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        showGalleryItem(currentIndex);
    }

    prevButtons.forEach(button => button.addEventListener('click', showPrevItem));
    nextButtons.forEach(button => button.addEventListener('click', showNextItem));

    showGalleryItem(currentIndex);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });

    
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    const produtosLink = document.querySelector('nav a[href="#produtos"]');
    const contatoLink = document.querySelector('nav a[href="#contato"]');

    produtosLink.addEventListener('mouseenter', () => {
        produtosLink.style.color = '#f0c040';
    });

    produtosLink.addEventListener('mouseleave', () => {
        if (!produtosLink.classList.contains('active')) {
            produtosLink.style.color = '#fff';
        }
    });

    contatoLink.addEventListener('mouseenter', () => {
        contatoLink.style.color = '#f0c040';
    });

    contatoLink.addEventListener('mouseleave', () => {
        if (!contatoLink.classList.contains('active')) {
            contatoLink.style.color = '#fff';
        }
    });
});