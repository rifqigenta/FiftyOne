import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const ModalEditBarang = ({ title, getData, id }) => {
  const [productName, setProductName] = useState("");
  const [stok, setStok] = useState("");
  const [harga, setHarga] = useState("");
  const [gambar, setGambar] = useState(null);
  const [jenis, setJenis] = useState("");

  const editFormData = new FormData();

  const handleHargaChange = (e) => {
    setHarga(parseInt(e.target.value, 10));
  };
  const handleStokChange = (e) => {
    setStok(parseInt(e.target.value, 10));
  };
  const handleFileChange = (e) => {
    setGambar(e.target.files[0]);
  };

  const closeModal = () => {
    document.getElementById(`my_modal_2${id}`).close();
  };

  const handleClickModal = () => {
    document.getElementById(`my_modal_2${id}`).showModal();
    fetch(`/products/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const editProduct = (id) => {
    editFormData.append("product_name", productName);
    editFormData.append("stok", stok);
    editFormData.append("harga", harga);
    editFormData.append("gambar", gambar);
    editFormData.append("jenis", jenis);
    fetch(`/products/${id}`, {
      method: "PUT",
      body: editFormData,
    })
      .then(() => {
        closeModal();
        getData();
      })
      .catch((err) => console.log(err));
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    editProduct(id);
    event.target.reset();
  };

  return (
    <>
      <button className='text-[14px] text-black font-bold hover:bg-orange-500  rounded-lg px-3 py-1' onClick={handleClickModal}>
        <span>
          <FontAwesomeIcon icon={faPencil} className='me-2' />
          Edit
        </span>
      </button>
      <dialog id={`my_modal_2${id}`} className='modal'>
        <div className='modal-box text-gray-400'>
          <h3 className='font-bold text-2xl text-start mb-8'>Edit {title}</h3>
          <form onSubmit={handleSubmitEdit} className='grid gap-y-4'>
            <div className='grid'>
              <label htmlFor='product_name'>Nama Barang</label>
              <input type='text' onChange={(e) => setProductName(e.target.value)} className='p-2 mt-1 rounded-[10px]' name='product_name' />
            </div>
            <div className='grid'>
              <label htmlFor='harga'>Harga</label>
              <input type='number' onChange={handleHargaChange} className='p-2 mt-1 rounded-[10px]' name='harga' />
            </div>
            <div className='grid'>
              <label htmlFor='stok'>Stok</label>
              <input type='number' onChange={handleStokChange} className='p-2 mt-1 rounded-[10px]' name='stok' />
            </div>
            <div className='grid'>
              <label htmlFor='jenis'>Jenis</label>
              <select name='jenis' className='p-2 mt-1 rounded-[10px]' id='jenis' onChange={(e) => setJenis(e.target.value)}>
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
