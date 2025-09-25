import React from "react";

export default function Tambahdata() {
  const showAlert = () => {
    alert("Data berhasil ditambahkan,Terima Kasih 👍👌!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={showAlert}
        className="bg-blue-500 text-white px-6 py-2 rounded shadow"
      >
        Tambah Data
      </button>
    </div>
  );
}
