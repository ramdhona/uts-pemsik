import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate dari react-router-dom untuk navigasi

// Komponen AddUser untuk menambah user baru
function AddUser({ onAddUser, showAlert }) {
  // State untuk menyimpan input form
  const [name, setName] = useState(""); // Nama Lengkap User
  const [nim, setNim] = useState(""); // NIM (Nomor Induk Mahasiswa) User
  const [umur, setUmur] = useState(""); // Umur User
  
  const [errors, setErrors] = useState({}); // State untuk menyimpan error pada form
  const navigate = useNavigate(); // Inisialisasi useNavigate untuk navigasi halaman

  // Fungsi handleSubmit untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman saat form disubmit
    let formErrors = {}; // Objek untuk menyimpan pesan error

    // Validasi untuk memastikan semua field terisi
    if (!name) formErrors.name = "Nama lengkap wajib diisi";
    if (!nim) formErrors.nim = "NIM wajib diisi";
    if (!umur) formErrors.umur = "Umur wajib diisi";

    // Jika terdapat error pada form, tampilkan error dan alert
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Set state errors dengan pesan error yang ditemukan
      showAlert("Gagal!", "Semua field harus diisi.", "error"); // Menampilkan alert error
      return; // Menghentikan eksekusi jika terdapat error
    }

    // Membuat objek user baru dengan data yang diinput
    const newUser = { name, nim, umur };

    // Memanggil fungsi onAddUser untuk menambahkan user ke daftar
    onAddUser(newUser);

    // Mengosongkan kembali input form setelah berhasil menambahkan data
    setName("");
    setNim("");
    setUmur("");
    setErrors({}); // Menghapus pesan error setelah submit berhasil

    // Menampilkan notifikasi sukses menggunakan SweetAlert2
    showAlert("Sukses!", "User berhasil ditambahkan.", "success");

    // Redirect ke halaman daftar user setelah menambahkan user
    navigate("/user");
  };

  // Mengembalikan UI form tambah user
  return (
    <form onSubmit={handleSubmit}>
      <h2>Tambah User Baru</h2>

      {/* Input Nama Lengkap User */}
      <div className="mb-3">
        <label className="form-label">Nama Lengkap</label>
        <input
          type="text"
          className={`form-control ${
            errors.name ? "border border-danger" : ""
          }`} // Menambahkan border merah jika ada error
          value={name} // Mengikat nilai input dengan state name
          onChange={(e) => setName(e.target.value)} // Mengubah nilai state name saat input berubah
        />
        {/* Menampilkan pesan error jika ada */}
        {errors.name && (
          <div className="text-danger" style={{ fontSize: "0.875rem" }}>
            {errors.name}
          </div>
        )}
      </div>

      {/* Input NIM User */}
      <div className="mb-3">
        <label className="form-label">NIM</label>
        <input
          type="text"
          className={`form-control ${
            errors.nim ? "border border-danger" : ""
          }`} // Border merah jika error
          value={nim} // Mengikat nilai input dengan state NIM
          onChange={(e) => setNim(e.target.value)} // Mengubah nilai state nim saat input berubah
        />
        {errors.nim && (
          <div className="text-danger" style={{ fontSize: "0.875rem" }}>
            {errors.nim}
          </div>
        )}
      </div>

      {/* Input Umur User */}
      <div className="mb-3">
        <label className="form-label">Umur</label>
        <input
          type="number"
          className={`form-control ${
            errors.umur ? "border border-danger" : ""
          }`} // Border merah jika error
          value={umur} // Mengikat nilai input dengan state umur
          onChange={(e) => setUmur(e.target.value)} // Mengubah nilai state umur saat input berubah
        />
        {errors.umur && (
          <div className="text-danger" style={{ fontSize: "0.875rem" }}>
            {errors.umur}
          </div>
        )}
      </div>

      {/* Tombol Simpan */}
      <button type="submit" className="btn btn-primary">
        Simpan
      </button>
    </form>
  );
}

export default AddUser;
