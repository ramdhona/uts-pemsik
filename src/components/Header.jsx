// src/components/Header.jsx

// Membuat komponen Header
// Menerima props `userName` untuk menampilkan nama pengguna
function Header({ userName }) {
  return (
    // Mengembalikan elemen header
    <header className="bg-white p-4 border-bottom">
      {/* Menggunakan Bootstrap untuk styling header */}
      <div className="d-flex justify-content-between align-items-center">
        {/* Menampilkan judul aplikasi */}
        <h1 className="h5 mb-0">Sistem Data User</h1>
        {/* Bagian kanan header untuk menampilkan nama pengguna dan tombol logout */}
        <div className="d-flex align-items-center">
          {/* Menampilkan nama pengguna yang diterima dari props */}
          <span className="me-3">Hallo, {userName}</span>
          {/* Tombol untuk logout */}
          <button className="btn btn-primary">Logout</button>
        </div>
      </div>
    </header>
  );
}

// Mengekspor komponen Header agar bisa digunakan di file lain
export default Header;
