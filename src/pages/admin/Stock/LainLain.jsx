import React from "react";
import { useState, useEffect } from "react";
import { ModalTambahBarang } from "../../../components/Modal/ModalTambahBarang";
import AdminSidebar from "../../../components/layout/AdminSidebar";
import TableBuah from "../../../components/Table/TableBuah";
import ModalEditBarang from "../../../components/Modal/ModalEditBarang";
import SwalButtonBarang from "../../../components/Swal/SwalButtonBarang";
const headers = [
  {
    no: "No",
    kode: "Kode",
    namaBarang: "Nama Barang",
    stok: "Stok",
    harga: "Harga",
    jenis: "Jenis",
    gambar: "Gambar",
  },
];

const LainLain = () => {
  const [header, setHeader] = useState(headers);
  const [isOpen, setIsOpen] = useState(true);
  const handlerOpen = () => {
    setIsOpen(!isOpen);
  };
  const [rows, setRows] = useState([]);
  let jenis = "lain-lain";
  const getData = () => {
    fetch(`/products/jenis/${jenis}`)
      .then((res) => res.json())
      .then((data) => {
        const stockSayuran = data.map((item) => ({
          id: item.id,
          kode: item.product_id,
          nama: item.product_name,
          stock: item.stok,
          price: item.harga,
          type: item.jenis,
          img: <img className='max-w-[105px]' src={`http://localhost:4000/uploads/${item.gambar}`} />,
          edit: (
            <div className='flex'>
              <ModalEditBarang title='Lain - Lain' id={item.id} getData={getData} />
              <SwalButtonBarang id={item.id} deleteData={deleteData} />
            </div>
          ),
        }));
        setRows(stockSayuran);
      });
  };

  const deleteData = (id) => {
    fetch(`/products/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        getData();
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(rows);

  return (
    <>
      <div className={`min-h-screen bg-white ${isOpen ? "pl-[280px]" : "pl-20"}`}>
        <AdminSidebar handlerOpen={handlerOpen} />
        <div className='flex'>
          <div className='px-8 py-12 w-full'>
            <div className='flex justify-between mb-8'>
              <h1 className='text-[24px] text-black font-bold'>Lain - Lain</h1>
              <ModalTambahBarang title='Lain - Lain' getData={getData} />
            </div>
            <div className='overflow-x-auto'>
              <TableBuah data={rows} header={header} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LainLain;
