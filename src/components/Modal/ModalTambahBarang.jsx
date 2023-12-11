import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export const ModalTambahBarang = ({ title }) => {
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
          <form action='' className='grid gap-y-4'>
            <div className='grid'>
              <label htmlFor='nama-barang'>Nama Barang</label>
              <input type='text' className='p-2 mt-1 rounded-[10px]' name='nama-barang' />
            </div>
            <div className='grid'>
              <label htmlFor='stok'>Stok</label>
              <input type='number' className='p-2 mt-1 rounded-[10px]' name='stok' />
            </div>
            <div className='grid'>
              <label htmlFor='type'>Jenis</label>
              {/* <input type='text' name='stok' /> */}
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
            </div>
          </form>

          <div className='modal-action flex justify-center mt-16'>
            <form method='dialog'>
              <button className='btn'>Kembali</button>
            </form>
            <form action='post'>
              <button className='btn' type='submit'>
                Simpan
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
