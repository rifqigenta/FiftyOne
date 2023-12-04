import React from "react";
import { useState } from "react";
import SweetAlert2 from "react-sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const SwalButtonDelete = () => {
  const [swalProps, setSwalProps] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setSwalProps({
            show: true,
            icon: "warning",
            title: "Yakin ingin menghapus data user ?",
            text: "",
          });
        }}
        className='hover:bg-red-500 hover:text-white py-1 px-4 hover:rounded-[10px]'
      >
        Hapus <FontAwesomeIcon icon={faTrash} className='ml-2' />
      </button>

      <SweetAlert2 {...swalProps} />
    </div>
  );
};

export default SwalButtonDelete;
