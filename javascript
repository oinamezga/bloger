// Script untuk menangani pengiriman formulir (misalnya untuk validasi)
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah halaman reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert('Terima kasih telah mendaftar, ' + name + '! Kami akan menghubungi Anda melalui email: ' + email);
        // Anda dapat menambahkan pengiriman data formulir ke server di sini
        document.getElementById('signup-form').reset();  // Mengosongkan formulir
    } else {
        alert('Harap lengkapi semua field!');
    }
});
