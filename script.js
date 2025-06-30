// Isi otomatis gambar profil jika kosong
const foto = document.getElementById('fotoProfil');
if (!foto.src || foto.src.endsWith("/")) {
  foto.src = 'https://avatars.githubusercontent.com/u/9919?s=200&v=4'; // Default foto profil
}

// Tambahkan interaksi klik pada hobi
const hobiItems = document.querySelectorAll('.hobi-item');
hobiItems.forEach(item => {
  item.addEventListener('click', () => {
    alert(`Kamu klik hobi: ${item.textContent}`);
  });
});

// Animasi scroll halus untuk tautan anchor (opsional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
