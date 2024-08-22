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

function sendWhatsAppReservation() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const route = document.getElementById('route').value;
    const departureTime = document.getElementById('departure-time').value;
    const bookingType = document.getElementById('booking-type').value;
    const passengerCount = document.getElementById('passenger-count').value;
    const pickupAddress = document.getElementById('pickup-address').value;
    const destinationAddress = document.getElementById('destination-address').value;
    const specialRequest = document.getElementById('special-request').value;

    const message = `Halo, saya ingin melakukan reservasi dengan rincian sebagai berikut:\n\n` +
                    `*Nama Lengkap:* ${name}\n` +
                    `*Nomor Telepon:* ${phone}\n` +
                    `*Email:* ${email}\n` +
                    `*Nomor WhatsApp:* ${whatsapp}\n\n` +
                    `*Rute Layanan:* ${route}\n` +
                    `*Waktu Pemberangkatan:* ${departureTime}\n` +
                    `*Jenis Pemesanan:* ${bookingType}\n` +
                    `*Jumlah Penumpang:* ${passengerCount}\n\n` +
                    `*Alamat Penjemputan:* ${pickupAddress}\n` +
                    `*Alamat Tujuan:* ${destinationAddress}\n\n` +
                    `*Pesan Tambahan:* ${specialRequest || 'Tidak ada'}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '6281334543419';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}