import React, { useState } from "react";
import Swal from "sweetalert2";

const Editdata = () => {
  const [formData, setFormData] = useState({
    makanan: "",
    paket: "paket",
    harga: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // logika update data di sini
    alert("Data berhasil diupdate!");
  };

  const handleBack = () => {
    // logika kembali misal navigasi ke halaman sebelumnya
    alert("Kembali ke halaman sebelumnya");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Edit Data</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Makanan
          <input
            type="text"
            name="makanan"
            value={formData.makanan}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Paket
          <input
            type="text"
            name="paket"
            value={formData.paket}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Harga
          <input
            type="number"
            name="harga"
            value={formData.harga}
            onChange={handleChange}
            style={styles.input}
          />
        </label>

        <div style={styles.buttonGroup}>
          <button type="submit" style={{ ...styles.button, ...styles.updateBtn }}>
            Update Data
          </button>
          <button
            type="button"
            onClick={handleBack}
            style={{ ...styles.button, ...styles.backBtn }}
          >
            Kembali
          </button>
        </div>
      </form>
    </div>
  );
};

// styling sederhana
const styles = {
  container: {
    maxWidth: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "15px",
    fontSize: "14px",
    color: "#555",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginTop: "5px",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    padding: "8px 15px",
    fontSize: "14px",
    cursor: "pointer",
    borderRadius: "4px",
    border: "none",
  },
  updateBtn: {
    backgroundColor: "#2ecc71",
    color: "#fff",
  },
  backBtn: {
    backgroundColor: "#7f8c8d",
    color: "#fff",
  },
};

export default Editdata;