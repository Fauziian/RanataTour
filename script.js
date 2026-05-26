// Inisialisasi ikon Lucide
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.style.display = isMenuOpen ? 'block' : 'none';
});

// Tutup menu saat link diklik
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.style.display = 'none';
    });
});

// Tab Switching
function switchTab(tabId) {
    // Sembunyikan semua tab
    document.getElementById('tab-hotel').classList.add('hidden');
    document.getElementById('tab-resto').classList.add('hidden');
    document.getElementById('tab-flight').classList.add('hidden');

    // Tampilkan tab yang dipilih
    document.getElementById('tab-' + tabId).classList.remove('hidden');

    // Update active class di tombol
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Cari tombol yang di-klik (berdasarkan event.currentTarget atau loop)
    event.currentTarget.classList.add('active');
}

// Hotel Qty Counter
let qty = 1;
const qtyVal = document.getElementById('qty-val');

function updateQty(change) {
    qty += change;
    if (qty < 1) qty = 1;
    qtyVal.innerText = qty;
}

// Pemilihan Hotel List (Interaktif visual saja)
const hotelItems = document.querySelectorAll('.hotel-item');
hotelItems.forEach(item => {
    item.addEventListener('click', () => {
        hotelItems.forEach(h => h.classList.remove('active'));
        item.classList.add('active');
    });
});
