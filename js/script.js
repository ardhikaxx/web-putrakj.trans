document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.site-menu a.nav-link');

    window.onscroll = () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.parentElement.classList.add('active');
            }
        });
    };
});

document.getElementById('whatsappForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const telepon = document.getElementById('telepon').value;
    const pesan = document.getElementById('pesan').value;
    const whatsappLink = `https://wa.me/${telepon}`;
    const message = `Assalamu'alaikum, nama saya ${nama}. Saya ingin menyampaikan: ${pesan}. Anda dapat menghubungi saya melalui WhatsApp di: ${whatsappLink}. Terima kasih.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6281334543419&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
});

document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.img-fluid', {
        origin: 'top',
        distance: '100px',
        duration: 1200,
        easing: 'ease-in-out',
        delay: 200
    });

    ScrollReveal().reveal('.hero-section h1', {
        origin: 'top',
        distance: '100px',
        duration: 1200,
        easing: 'ease-in-out',
        delay: 200
    });

    ScrollReveal().reveal('.hero-section p', {
        origin: 'top',
        distance: '100px',
        duration: 1200,
        easing: 'ease-in-out',
        delay: 300
    });

    ScrollReveal().reveal('.hero-section .btn', {
        origin: 'bottom',
        distance: '50px',
        duration: 1200,
        easing: 'ease-in-out',
        delay: 400
    });

    ScrollReveal().reveal('#layanan', {
        interval: 200,
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        delay: 150
    });

    ScrollReveal().reveal('#syarat', {
        interval: 200,
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        delay: 150
    });

    ScrollReveal().reveal('#kontak', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        delay: 150
    });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();