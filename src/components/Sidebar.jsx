// Mengimpor komponen Link dari react-router-dom untuk navigasi antar halaman
import { Link } from "react-router-dom";

// Komponen Sidebar untuk menampilkan menu navigasi di sisi kiri
function Sidebar() {
  return (
    // Elemen aside untuk sidebar, dengan pengaturan warna dan padding
    <aside
      className="text-white p-4" // Menambahkan kelas text-white untuk teks putih dan padding 4
      style={{ width: "16rem", backgroundColor: "#114d91" }} // Menambahkan styling inline untuk lebar dan warna latar belakang sidebar
    >
      {/* Judul Sidebar */}
      <h1 className="h3 fw-bold text-center">Manajemen User</h1>{" "}
      {/* Menampilkan judul sidebar dengan kelas bootstrap untuk ukuran dan tebal font */}
      {/* Navigasi Menu */}
      <nav className="mt-4">
        {/* Unordered list untuk menampilkan item navigasi */}
        <ul className="nav flex-column">
          {/* Daftar menu pertama: Dashboard */}
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              {" "}
              {/* Link menuju halaman utama (Dashboard) */}
              Dashboard
            </Link>
          </li>

          {/* Daftar menu kedua: User List */}
          <li className="nav-item">
            <Link to="/user" className="nav-link text-white">
              {" "}
              {/* Link menuju halaman Daftar User */}
              User List
            </Link>
          </li>

          {/* Daftar menu ketiga: Add User */}
          <li className="nav-item">
            <Link to="/add-user" className="nav-link text-white">
              {" "}
              {/* Link menuju halaman untuk menambah user baru */}
              Add User
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

// Mengekspor komponen Sidebar agar dapat digunakan di file lain
export default Sidebar;
