import React, { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const [fullName, setFullName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // validasi sederhana
    if (!fullName || !gmail || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Semua field harus diisi!",
      });
      return;
    }

    // jika validasi OK
    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Data berhasil diupdate!",
    });
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        
        <label>
          Nama Lengkap
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Nama Lengkap"
            style={styles.input}
          />
        </label>
        <label>
          Gmail
          <input
            type="email"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            placeholder="akun@gmail.com"
            style={styles.input}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  form: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  input: {
    width: "100%",
    padding: 8,
    marginTop: 5,
    borderRadius: 4,
    border: "1px solid #ccc",
    fontSize: 16,
  },
  button: {
    padding: 10,
    backgroundColor: "#06b6d4",
    color: "#fff",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Login;