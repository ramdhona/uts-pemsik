// src/components/Footer.jsx

// Membuat komponen Footer
function Footer() {
  return (
    // Mengembalikan elemen footer
    <footer
      // Menambahkan kelas untuk styling teks dan padding
      className="text-center text-white py-3"
      // Menambahkan styling inline untuk mengatur warna background
      style={{ backgroundColor: "#114d91" }}
    >
      {/* Konten footer berupa teks hak cipta */}
      &copy; Dwi Ramdhona - A11.2022.14033
    </footer>
  );
}

// Mengekspor komponen Footer agar bisa digunakan di file lain
export default Footer;
