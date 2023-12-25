import React, { useState } from "react";
import SweetAlert2 from "react-sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const SwalButtonBarang = ({ id, deleteData }) => {
  const [swalProps, setSwalProps] = useState(false);
  const [namaProduct, setNamaProduct] = useState("");

  fetch(`/products/${id}`, {
    method: "get",
  })
    .then((res) => res.json())
    .then((data) => {
      setNamaProduct(data.product_name);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSwalProps({
      show: true,
      icon: "warning",
      title: `Yakin ingin menghapus data ${namaProduct} ?`,
      text: "",
      confirmButtonText: "Ya, Hapus!",
      showCancelButton: true,
      cancelButtonText: "Batal",
    });
  };
  const handleConfirm = () => {
    deleteData(id);
  };
  return (
    <div>
      <button onClick={handleSubmit} className='hover:bg-red-500 hover:text-white py-1 px-4 hover:rounded-[10px]'>
        Hapus <FontAwesomeIcon icon={faTrash} className='ml-2' />
      </button>

      <SweetAlert2 {...swalProps} onConfirm={handleConfirm} onCancel={() => setSwalProps(false)} />
    </div>
  );
};

export default SwalButtonBarang;
