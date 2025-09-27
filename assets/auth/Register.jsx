import React, { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleDaftar = (e) => {
    e.preventDefault();

    if(!namaLengkap || !email || !password){
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Semua wajib diisi!",
      });
      return;
    }

    // Contoh validasi email sederhana
    const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      Swal.fire({
        icon: "error",
        title: "Email tidak valid",
        text: "Masukkan email yang benar",
      });
      return;
    }

    // Logika daftar atau API call bisa ditambahkan di sini

    Swal.fire({
      icon: "success",
      title: "Berhasil Daftar",
    });

    // Reset form
    setNamaLengkap("");
    setEmail("");
    setPassword("");
  };

  const handleMasuk = () => {
    // Logic pindah ke halaman login bisa ditambahkan di sini, misal route ke /login
    Swal.fire({
      icon: "info",
      title: "Halaman Masuk",
      text: "Fungsi pindah ke halaman masuk belum ditambahkan.",
    });
  };

  return (
    <div style={{width:"300px", margin:"50px auto"}}>
      <h3 style={{textAlign:"center", marginBottom:"20px"}}>Daftar</h3>
      <form onSubmit={handleDaftar}>
        <label htmlFor="namaLengkap">Nama Lengkap</label>
        <input
          type="text"
          id="namaLengkap"
          value={namaLengkap}
          onChange={(e) => setNamaLengkap(e.target.value)}
          placeholder="Masukkan nama lengkap"
          style={{width:"100%", marginBottom:"10px", padding:"8px"}}
        />
        <label htmlFor="email">Gmail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan email"
          style={{width:"100%", marginBottom:"10px", padding:"8px"}}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan password"
          style={{width:"100%", marginBottom:"20px", padding:"8px"}}
        />

        <button 
          type="submit" 
          style={{backgroundColor:"#22c55e", color:"white", padding:"10px 15px", border:"none", cursor:"pointer"}}
        >
          Daftar
        </button>
        <button 
          type="button" 
          onClick={handleMasuk}
          style={{marginLeft:"10px", backgroundColor:"#6b7280", color:"white", padding:"10px 15px", border:"none", cursor:"pointer"}}
        >
          Sudah punya akun? Masuk
        </button>
      </form>
    </div>
  );
};

export default Register;