// Mengimpor hook useParams dari react-router-dom
import { useParams } from "react-router-dom";

// Komponen UserDetail untuk menampilkan detail user
// Menerima props `users` (daftar user)
function UserDetail({ users }) {
  // Menggunakan useParams untuk mendapatkan parameter id dari URL
  const { id } = useParams();

  // Mencari user dalam daftar users berdasarkan id yang diperoleh dari URL
  // Mengubah id yang diperoleh dari URL menjadi tipe number dengan parseInt
  const user = users.find((user) => user.id === parseInt(id));

  // Mengembalikan tampilan detail user jika user ditemukan, jika tidak menampilkan pesan "User tidak ditemukan"
  return user ? (
    <div>
      <h2>Detail User</h2>
      {/* Menampilkan nama lengkap user */}
      <p>
        <strong>Nama:</strong> {user.name}
      </p>
      {/* Menampilkan NIM user */}
      <p>
        <strong>NIM:</strong> {user.nim}
      </p>
      {/* Menampilkan umur user */}
      <p>
        <strong>Umur:</strong> {user.umur}
      </p>
    </div>
  ) : (
    // Pesan yang ditampilkan jika user tidak ditemukan
    <p>User tidak ditemukan</p>
  );
}

// Mengekspor komponen UserDetail agar bisa digunakan di file lain
export default UserDetail;
