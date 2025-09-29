import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const TambahData = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    jurusan: '',
    angkatan: '',
    status: ''
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // Simpan data handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana (bisa dikembangkan)
    if (!formData.nama || !formData.email) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Nama dan Email harus diisi!'
      });
      return;
    }

    // Simulate menyimpan data (misal ke API atau localstorage)
    // Local storage contoh:
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));

    Swal.fire({
      icon: 'success',
      title: 'Berhasil',
      text: 'Data berhasil disimpan!'
    });

    // Reset form
    setFormData({
      nama: '',
      email: '',
      jurusan: '',
      angkatan: '',
      status: ''
    });
  }

  // Kembali handler
  const handleBack = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
  }

  return (
    <div style={{ maxWidth: '400px', margin: '30px auto' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Tambah Data users</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>nama</label><br />
          <input 
            type="text" 
            name="nama" 
            value={formData.nama} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px' }} 
            required 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>email</label><br />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px' }} 
            required 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>jurusan</label><br />
          <input 
            type="text" 
            name="jurusan" 
            value={formData.jurusan} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px' }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>angkatan</label><br />
          <input 
            type="text" 
            name="angkatan" 
            value={formData.angkatan} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px' }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>status</label><br />
          <input 
            type="text" 
            name="status" 
            value={formData.status} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px' }} 
          />
        </div>
        <button 
          type="submit" 
          style={{ backgroundColor: '#007bff', color: 'white', padding: '8px 15px', border: 'none', cursor: 'pointer', marginRight: '10px' }}
        >
          Simpan Data
        </button>
        <button 
          type="button" 
          onClick={handleBack} 
          style={{ backgroundColor: '#6c757d', color: 'white', padding: '8px 15px', border: 'none', cursor: 'pointer' }}
        >
          Kembali
        </button>
      </form>
    </div>
  );
}

export default TambahData;