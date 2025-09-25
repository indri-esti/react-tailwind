import React, { useState } from "react";

export default function FormData() {
  const [makanan, setMakanan] = useState("");
  const [paket, setPaket] = useState("");
  const [harga, setHarga] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data berhasil ditambahkan!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Edit Data</h2>

        <label className="block mb-2">Makanan</label>
        <input
          type="text"
          value={makanan}
          onChange={(e) => setMakanan(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          placeholder="Isi nama makanan"
        />

        <label className="block mb-2">Paket</label>
        <input
          type="text"
          value={paket}
          onChange={(e) => setPaket(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          placeholder="Isi paket"
        />

        <label className="block mb-2">Harga</label>
        <input
          type="number"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          placeholder="Isi harga"
        />

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Update Data
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Kembali
          </button>
        </div>
      </form>
    </div>
  );
}
