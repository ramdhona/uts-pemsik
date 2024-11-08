import "bootstrap/dist/css/bootstrap.min.css"; // Mengimpor file CSS Bootstrap untuk styling
import "./assets/style.css"; // Mengimpor file CSS kustom untuk styling tambahan
import React, { useState } from "react"; // Mengimpor React dan hook useState
import ReactDOM from "react-dom/client"; // Mengimpor ReactDOM untuk merender aplikasi
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Mengimpor routing untuk aplikasi
import Swal from "sweetalert2"; // Mengimpor SweetAlert2 untuk menampilkan alert

// Mengimpor komponen-komponen yang digunakan dalam aplikasi
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UserList"; // Menampilkan daftar user
import UserDetail from "./components/UserDetail"; // Menampilkan detail user
import AddUser from "./components/AddUser"; // Menambahkan user baru
import EditUser from "./components/EditUser"; // Mengedit data user

// Komponen utama aplikasi
function App() {
  // Menggunakan hook useState untuk mendeklarasikan state untuk daftar user
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Dwi Ramdhona",
      nim: "A11.2022.14033",
      umur: 20,
    },
    {
      id: 2,
      name: "Jatmoko",
      nim: "A11.2022.154532",
      umur: 19,
    },
    {
      id: 3,
      name: "Lutfi",
      nim: "A11.2022.15682",
      umur: 20,
    },
  ]);

  const [user] = useState("Dwi Ramdhona"); // Mendeklarasikan user yang sedang login

  // Fungsi untuk menampilkan SweetAlert dengan parameter title, text, dan icon
  const showAlert = (title, text, icon) => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: "OK", // Tombol konfirmasi
    });
  };

  // Fungsi untuk menambah user ke dalam daftar users
  const addUser = (newUser) => {
    const newUsers = [...users, { ...newUser, id: users.length + 1 }]; // Menambahkan user baru dengan id yang sesuai
    setUsers(newUsers); // Memperbarui state users
    showAlert("Sukses!", "User berhasil ditambahkan.", "success"); // Menampilkan alert sukses
  };

  // Fungsi untuk menghapus user berdasarkan id
  const deleteUser = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin?", // Menampilkan konfirmasi sebelum menghapus
      text: "Data ini akan dihapus!",
      icon: "warning",
      showCancelButton: true, // Menampilkan tombol batal
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        const filteredUsers = users.filter((user) => user.id !== id); // Menghapus user dari daftar
        setUsers(filteredUsers); // Memperbarui state users setelah penghapusan
        showAlert("Dihapus!", "User berhasil dihapus.", "success"); // Menampilkan alert sukses
      }
    });
  };

  // Fungsi untuk memperbarui user berdasarkan id
  const updateUser = (updatedUser) => {
    const updatedUsers = users.map(
      (user) => (user.id === updatedUser.id ? updatedUser : user) // Memperbarui user dengan data baru
    );
    setUsers(updatedUsers); // Memperbarui state users
    showAlert("Sukses!", "Data user berhasil diubah.", "success"); // Menampilkan alert sukses
  };

  // Menghitung jumlah total data user
  const totalUserCount = users.length;

  
  return (
    <Router>
      {/* Router untuk mendukung navigasi dalam aplikasi */}
      <div className="d-flex min-vh-100">
        <Sidebar /> {/* Sidebar untuk navigasi aplikasi */}
        <div className="flex-grow-1 d-flex flex-column">
          <Header userName={user} /> {/* Header yang menampilkan nama pengguna */}
          <main className="flex-grow-1 p-4 bg-light">
            <Routes>
              {/* Menentukan routing aplikasi */}
              <Route
                path="/" // Halaman utama yang menampilkan statistik data user
                element={
                  <div>
                    <div className="row">
                      {/* Card selamat */}
                      <div className="col-md-12 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Hallo, Selamat Datang {user}</h5>
                            <p className="card-text"> Di Sistem Data User</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {/* Card Jumlah Data User */}
                      <div className="col-md-6 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Jumlah Total Data User</h5>
                            <p className="card-text">{totalUserCount} user</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
              <Route
                path="/user" // Menampilkan daftar user
                element={
                  <UserList users={users} deleteUser={deleteUser} />
                }
              />
              <Route path="/user/:id" element={<UserDetail users={users} />} />
              {/* Halaman detail untuk setiap user */}
              <Route
                path="/add-user"
                element={<AddUser onAddUser={addUser} showAlert={showAlert} />}
                // Halaman untuk menambahkan user baru
              />
              <Route
                path="/edit-user/:id"
                element={
                  <EditUser
                    onUpdateUser={updateUser}
                    users={users}
                    showAlert={showAlert}
                  />
                  // Halaman untuk mengedit user
                }
              />
            </Routes>
          </main>
          <Footer /> {/* Footer aplikasi */}
        </div>
      </div>
    </Router>
  );
}

// Merender aplikasi di dalam elemen dengan id 'root'
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
