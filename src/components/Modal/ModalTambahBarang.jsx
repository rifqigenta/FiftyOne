import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export const ModalTambahBarang = () => {
  return (
    <>
      <button className='text-[24px] text-black font-bold' onClick={() => document.getElementById("my_modal_1").showModal()}>
        <span>
          <FontAwesomeIcon icon={faPlusCircle} className='me-2' /> Tambah Barang
        </span>
      </button>
      <dialog id='my_modal_1' className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg text-center'>Tambah Sayur</h3>
          {/* <div className='modal-action'> */}
          <form action='' className='grid gap-y-4'>
            <div className='grid'>
              <label htmlFor='nama-barang'>Nama Barang</label>
              <input type='text' name='nama-barang' />
            </div>
            <div className='grid'>
              <label htmlFor='stok'>Stok</label>
              <input type='number' name='stok' />
            </div>
          </form>
          {/* </div> */}

          <div className='modal-action flex justify-center'>
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
