import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Komponen EditUser untuk mengedit data user
function EditUser({ users, onUpdateUser, showAlert }) {
  // Mengambil parameter ID dari URL
  const { id } = useParams();

  // Inisialisasi fungsi navigasi
  const navigate = useNavigate();

  // State untuk menyimpan data user yang akan diedit
  const [user, setUser] = useState({
    name: "", // Nama Lengkap User
    nim: "", // NIM User
    umur: "", // Umur User
  });

  // Mengambil data user yang akan diedit berdasarkan ID yang diperoleh dari URL
  useEffect(() => {
    // Mencari user berdasarkan ID
    const userToEdit = users.find((user) => user.id === parseInt(id));

    // Jika user ditemukan, set state dengan data user yang akan diedit
    if (userToEdit) {
      setUser(userToEdit);
    }
  }, [id, users]);

  // Fungsi untuk mengubah state user berdasarkan input dari pengguna
  const handleChange = (e) => {
    const { name, value } = e.target; // Mendapatkan nama dan nilai dari input
    setUser((prevUser) => ({
      ...prevUser, // Menyalin data user sebelumnya
      [name]: value, // Memperbarui nilai properti berdasarkan input
    }));
  };

  // Fungsi untuk mengirim data yang telah diubah dan menampilkan alert sukses
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah halaman melakukan reload

    // Memanggil fungsi onUpdateUser untuk memperbarui data user
    onUpdateUser(user);

    // Menampilkan notifikasi sukses menggunakan SweetAlert
    showAlert("Sukses!", "Data user berhasil diubah.", "success");

    // Mengarahkan pengguna kembali ke halaman daftar user setelah update berhasil
    navigate("/user");
  };

  return (
    <div>
      <h2>Edit User</h2>
      {/* Form untuk mengedit data user */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            name="name" // Nama input untuk mengubah state "name"
            value={user.name} // Nilai input diambil dari state user
            onChange={handleChange} // Memanggil fungsi handleChange saat input berubah
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nim" className="form-label">
            NIM
          </label>
          <input
            type="text"
            id="nim"
            name="nim" // Nama input untuk mengubah state "nim"
            value={user.nim} // Nilai input diambil dari state user
            onChange={handleChange} // Memanggil fungsi handleChange saat input berubah
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="umur" className="form-label">
            Umur
          </label>
          <input
            type="number"
            id="umur"
            name="umur" // Nama input untuk mengubah state "umur"
            value={user.umur} // Nilai input diambil dari state user
            onChange={handleChange} // Memanggil fungsi handleChange saat input berubah
            className="form-control"
          />
        </div>
        
        {/* Button untuk submit form */}
        <button type="submit" className="btn btn-primary">
          Simpan
        </button>
      </form>
    </div>
  );
}

// Mengekspor komponen EditUser agar bisa digunakan di file lain
export default EditUser;
