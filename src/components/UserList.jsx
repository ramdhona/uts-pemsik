// Mengimpor hook useState dari React dan Link dari react-router-dom
import { useState } from "react";
import { Link } from "react-router-dom";

// Komponen UserList untuk menampilkan daftar user
// Menerima props `users` (daftar user) dan `deleteUser` (fungsi untuk menghapus user)
function UserList({ users, deleteUser }) {
  // State untuk menyimpan input pencarian (searchTerm)
  const [searchTerm, setSearchTerm] = useState("");

  // Filter user berdasarkan searchTerm yang diinputkan oleh pengguna
  // User akan difilter berdasarkan nama atau NIM yang mengandung searchTerm
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.nim.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fungsi handleDelete untuk memanggil fungsi deleteUser berdasarkan id user
  const handleDelete = (id) => {
    deleteUser(id); // Memanggil fungsi deleteUser yang diterima dari props
  };

  return (
    // Kontainer utama untuk daftar user
    <div className="bg-white p-4 rounded shadow-sm">
      <h2>Daftar User</h2>
      {/* Input untuk pencarian user */}
      <div className="mb-3">
        <label htmlFor="search" className="form-label">
          Cari User
        </label>
        <input
          type="text"
          id="search"
          className="form-control"
          placeholder="Cari berdasarkan nama atau nim"
          value={searchTerm} // Mengambil nilai searchTerm dari state
          onChange={(e) => setSearchTerm(e.target.value)} // Mengubah nilai searchTerm saat input berubah
        />
      </div>

      {/* Tabel untuk menampilkan daftar user */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th> {/* Kolom nomor urut */}
            <th>Nama Lengkap</th> {/* Kolom nama user */}
            <th>NIM</th> {/* Kolom NIM user */}
            <th>Umur</th> {/* Kolom umur user */}
            <th>Aksi</th> {/* Kolom untuk tombol aksi (detail, edit, hapus) */}
          </tr>
        </thead>
        <tbody>
          {/* Melakukan iterasi terhadap filteredUsers dan menampilkan setiap user sebagai baris tabel */}
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td> {/* Menampilkan nomor urut berdasarkan index */}
              <td>{user.name}</td> {/* Menampilkan nama user */}
              <td>{user.nim}</td> {/* Menampilkan NIM user */}
              <td>{user.umur}</td> {/* Menampilkan umur user */}
              <td>
                {/* Link untuk menuju halaman detail user berdasarkan id */}
                <Link to={`/user/${user.id}`} className="btn btn-info me-2">
                  Detail
                </Link>
                {/* Link untuk menuju halaman edit user berdasarkan id */}
                <Link
                  to={`/edit-user/${user.id}`}
                  className="btn btn-warning me-2"
                >
                  Edit
                </Link>
                {/* Tombol untuk menghapus user, memanggil handleDelete dengan id user */}
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => handleDelete(user.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Mengekspor komponen UserList agar bisa digunakan di file lain
export default UserList;
