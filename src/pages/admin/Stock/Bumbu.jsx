import React from "react";
import { useState } from "react";
import { ModalTambahBarang } from "../../../components/Modal/ModalTambahBarang";
import AdminSidebar from "../../../components/layout/AdminSidebar";
import TableBuah from "../../../components/Table/TableBuah";
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
const stockBumbu = [
  {
    id: 1,
    kode: "B001",
    nama: "Garam",
    stock: 200,
    price: 2000,
    type: "Bumbu",
    img: <img src='/admin-stock/exbuah1.svg' />,
  },
  {
    id: 2,
    kode: "B002",
    nama: "Merica",
    stock: 200,
    price: 2000,
    type: "Bumbu",
    img: <img src='/admin-stock/exbuah2.svg' />,
  },
  {
    id: 3,
    kode: "B003",
    nama: "Penyedap",
    stock: 200,
    price: 2000,
    type: "Bumbu",
    img: <img src='/admin-stock/exbuah3.svg' />,
  },
  {
    id: 4,
    kode: "B004",
    nama: "Lada",
    stock: 200,
    price: 2000,
    type: "Bumbu",
    img: <img src='/admin-stock/exbuah4.svg' />,
  },
  {
    id: 5,
    kode: "B005",
    nama: "Realme 6",
    stock: 200,
    price: 2000,
    type: "Bumbu",
    img: <img src='/admin-stock/exbuah5.svg' />,
  },
];

const Bumbu = () => {
  const [rows, setRows] = useState(stockBumbu);
  const [header, setHeader] = useState(headers);
  const [isOpen, setIsOpen] = useState(true);
  const handlerOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`h-screen bg-white ${isOpen ? "pl-[280px]" : "pl-20"}`}>
        <AdminSidebar handlerOpen={handlerOpen} />
        <div className='flex'>
          <div className='px-8 py-12 w-full'>
            <div className='flex justify-between mb-8'>
              <h1 className='text-[24px] text-black font-bold'>Bumbu</h1>
              <ModalTambahBarang title='Bumbu' />
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

export default Bumbu;
