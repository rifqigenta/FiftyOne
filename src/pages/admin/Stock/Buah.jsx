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
const stockBuah = [
  {
    id: 1,
    kode: "F001",
    nama: "Apel",
    stock: 200,
    price: 2000,
    type: "Buah",
    img: <img src='/admin-stock/exbuah1.svg' />,
  },
  {
    id: 2,
    kode: "F002",
    nama: "Anggur",
    stock: 200,
    price: 2000,
    type: "Buah",
    img: <img src='/admin-stock/exbuah2.svg' />,
  },
  {
    id: 3,
    kode: "F003",
    nama: "Blueberry",
    stock: 200,
    price: 2000,
    type: "Buah",
    img: <img src='/admin-stock/exbuah3.svg' />,
  },
  {
    id: 4,
    kode: "F004",
    nama: "Cherry",
    stock: 200,
    price: 2000,
    type: "Buah",
    img: <img src='/admin-stock/exbuah4.svg' />,
  },
  {
    id: 5,
    kode: "F005",
    nama: "Durian",
    stock: 200,
    price: 2000,
    type: "Buah",
    img: <img src='/admin-stock/exbuah5.svg' />,
  },
];

const Buah = () => {
  const [rows, setRows] = useState(stockBuah);
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
              <h1 className='text-[24px] text-black font-bold'>Buah</h1>
              <ModalTambahBarang title='Buah' />
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

export default Buah;
