import React, { useState } from 'react';

const Tabeldata = () => {
  const [data, setData] = useState([
    { id: 1, makanan: 'nasi goreng babat', paket: 'paket 1', harga: 15.000 },
  ]);

  const tambahData = () => {
    // Contoh fungsi untuk menambah data baru
    const newData = {
      id: data.length + 1,
      makanan: 'ayam goreng',
      paket: 'paket 2',
      harga: 20.000,
    };
    setData([...data, newData]);
  };

  const editData = (id) => {
    // Contoh fungsi edit data, bisa dikembangkan sesuai kebutuhan
    alert(`Edit data dengan ID: ${id}`);
  };

  const hapusData = (id) => {
    const confirm = window.confirm('Yakin ingin menghapus data ini?');
    if (confirm) {
      setData(data.filter(item => item.id !== id));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Tabel Data</h2>
      <button 
        onClick={tambahData} 
        className="mb-4 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Tambah Data
      </button>
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: "#475569", color: "white" }}></tr>
          <tr className="bg-gray-600 text-white">
            <th style={{ padding: 1, border: '1px solid #504d4dff' }}>No</th>
            <th style={{ padding: 10, border: '1px solid #504d4dff' }}>Makanan</th>
            <th style={{ padding: 10, border: '1px solid #524d4dff' }}>paket</th>
            <th style={{ padding: 10, border: '1px solid #524d4dff' }}>Harga</th>
            <th style={{ padding: 10, border: '1px solid #524d4dff' }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="text-center">
              <td style={{ padding: 10, border: '1px solid #ddd' }}>{index+1}</td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>{item.makanan}</td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>{item.paket}</td>
              <td style={{ padding: 10, border: '1px solid #ddd' }}>{item.harga}</td>
              <td steyle className="border px-4 py-2 flex justify-center gap-2">
                <button 
                  onClick={() => editData(item.id)} 
                  className="bg-gray-800 text-white px-2 py-1 rounded"
                  title="Edit"
                >
                  ✏️
                </button>
                <button 
                  onClick={() => hapusData(item.id)} 
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  title="Hapus"
                >
                  🗑️🚮
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabeldata;