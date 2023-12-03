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
    gambar: "Gambar",
  },
];
const stockLainnya = [
  {
    id: 1,
    kode: "L001",
    nama: "Minyak",
    stock: 200,
    img: <img src='/admin-stock/exbuah1.svg' />,
  },
  {
    id: 2,
    kode: "L002",
    nama: "Tepung Terigu",
    stock: 200,
    img: <img src='/admin-stock/exbuah2.svg' />,
  },
  {
    id: 3,
    kode: "L003",
    nama: "Tepung Kanji",
    stock: 200,
    img: <img src='/admin-stock/exbuah3.svg' />,
  },
  {
    id: 4,
    kode: "L004",
    nama: "Tepung Beras",
    stock: 200,
    img: <img src='/admin-stock/exbuah4.svg' />,
  },
  {
    id: 5,
    kode: "L005",
    nama: "Tepung Kentang",
    stock: 200,
    img: <img src='/admin-stock/exbuah5.svg' />,
  },
];

const LainLain = () => {
  const [rows, setRows] = useState(stockLainnya);
  const [header, setHeader] = useState(headers);

  return (
    <>
      <div className='h-screen bg-white pl-[280px]'>
        <AdminSidebar />
        <div className='flex'>
          <div className='px-8 py-12 w-full'>
            <div className='flex justify-between mb-8'>
              <h1 className='text-[24px] text-black font-bold'>Lain lain</h1>
              <ModalTambahBarang />
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
