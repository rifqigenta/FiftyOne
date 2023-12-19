import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const ModalEditBarang = ({ title, getData, id }) => {
  const [productName, setProductName] = useState("");
  const [stok, setStok] = useState("");
  const [harga, setHarga] = useState("");
  const [gambar, setGambar] = useState(null);
  const [jenis, setJenis] = useState("");

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
    formData.append("jenis", jenis);
    // let id = this.id;
    fetch(`/products/${id}`, {
      method: "put",
      body: formData,
    })
      .then(() => {
        closeModal();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <button className='text-[14px] text-black font-bold hover:bg-orange-500  rounded-lg px-3 py-1' onClick={() => document.getElementById("my_modal_2").showModal()}>
        <span>
          <FontAwesomeIcon icon={faPencil} className='me-2' />
          Edit
        </span>
      </button>
      <dialog id='my_modal_2' className='modal'>
        <div className='modal-box text-gray-400'>
          <h3 className='font-bold text-2xl text-start mb-8'>Edit {title}</h3>
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
            <div className='grid'>
              <label htmlFor='type'>Jenis</label>
              {/* <input type='text' name='stok' /> */}
              <select name='type' className='p-2 mt-1 rounded-[10px]' id='type' onChange={(e) => setJenis(e.target.value)}>
                <option value='' hidden></option>
                <option value='buah'>Buah</option>
                <option value='bumbu'>Bumbu</option>
                <option value='daging'>Daging</option>
                <option value='susu'>Produk Susu</option>
                <option value='sayuran'>Sayuran</option>
                <option value='sembako'>Sembako</option>
                <option value='3t'>3 T</option>
                <option value='lain-lain'>Lain - lain</option>
              </select>
            </div>
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

export default ModalEditBarang;
