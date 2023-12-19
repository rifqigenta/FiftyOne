import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export const ModalTambahBarang = ({ title, getData }) => {
  const [productName, setProductName] = useState("");
  const [stok, setStok] = useState("");
  const [harga, setHarga] = useState("");
  const [gambar, setGambar] = useState(null);

  const formData = new FormData();

  const handleNumChange = (e) => {
    setHarga(parseInt(e.target.value, 10));
    setStok(parseInt(e.target.value, 10));
  };
  const handleFileChange = (e) => {
    setGambar(e.target.files[0]);
  };

  const closeModal = () => {
    document.getElementById("my_modal_1").close();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle Useref >> FormData
    formData.append("product_name", productName);
    formData.append("stok", stok);
    formData.append("harga", harga);
    formData.append("gambar", gambar);

    fetch("/products/", {
      method: "post",
      body: formData,
      // headers: {},
    })
      .then((res) => res.json())
      .then(() => {
        closeModal();
        getData();
      });
  };

  return (
    <>
      <button className='text-[24px] text-black font-bold' onClick={() => document.getElementById("my_modal_1").showModal()}>
        <span>
          <FontAwesomeIcon icon={faPlusCircle} className='me-2' /> Tambah Barang
        </span>
      </button>
      <dialog id='my_modal_1' className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-2xl text-start mb-8'>Tambah {title}</h3>
          <form onSubmit={handleSubmit} className='grid gap-y-4'>
            <div className='grid'>
              <label htmlFor='nama-barang'>Nama Barang</label>
              <input type='text' onChange={(e) => setProductName(e.target.value)} className='p-2 mt-1 rounded-[10px]' name='nama-barang' />
            </div>
            <div className='grid'>
              <label htmlFor='harga'>Harga</label>
              <input type='number' onChange={handleNumChange} className='p-2 mt-1 rounded-[10px]' name='harga' />
            </div>
            <div className='grid'>
              <label htmlFor='stok'>Stok</label>
              <input type='number' onChange={handleNumChange} className='p-2 mt-1 rounded-[10px]' name='stok' />
            </div>
            {/* <div className='grid'>
              <label htmlFor='type'>Jenis</label>
              <input type='text' name='stok' />
              <select name='type' className='p-2 mt-1 rounded-[10px]' id='type'>
                <option value='Buah'>Buah</option>
                <option value='Bumbu'>Bumbu</option>
                <option value='Daging'>Daging</option>
                <option value='Produk Susu'>Produk Susu</option>
                <option value='Sayuran'>Sayuran</option>
                <option value='Sembako'>Sembako</option>
                <option value='3 T'>3 T</option>
                <option value='Lain - lain'>Lain - lain</option>
              </select>
            </div> */}
            <div className='grid'>
              <label htmlFor='gambar'>Gambar</label>
              <input type='file' onChange={handleFileChange} name='gambar' id='gambar' />
            </div>
            <div className='modal-action flex justify-center mt-16'>
              <form method='dialog'>
                <button className='btn'>Kembali</button>
              </form>
              <div>
                <button className='btn' type='submit'>
                  Simpan
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};
