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
const stockProdukSusu = [
  {
    id: 1,
    kode: "M001",
    nama: "opo iki aku ra paham",
    stock: 200,
    price: 2000,
    type: "Produk Susu",
    img: <img src='/admin-stock/exbuah1.svg' />,
  },
  {
    id: 2,
    kode: "M002",
    nama: "rapaham part 2",
    stock: 200,
    price: 2000,
    type: "Produk Susu",
    img: <img src='/admin-stock/exbuah2.svg' />,
  },
  {
    id: 3,
    kode: "M003",
    nama: "rapaham part 3",
    stock: 200,
    price: 2000,
    type: "Produk Susu",
    img: <img src='/admin-stock/exbuah3.svg' />,
  },
  {
    id: 4,
    kode: "M004",
    nama: "rapaham part 4",
    stock: 200,
    price: 2000,
    type: "Produk Susu",
    img: <img src='/admin-stock/exbuah4.svg' />,
  },
  {
    id: 5,
    kode: "M005",
    nama: "rapaham part 5",
    stock: 200,
    price: 2000,
    type: "Produk Susu",
    img: <img src='/admin-stock/exbuah5.svg' />,
  },
];

const ProdukSusu = () => {
  const [rows, setRows] = useState(stockProdukSusu);
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
              <h1 className='text-[24px] text-black font-bold'>Produk Susu</h1>
              <ModalTambahBarang title='Produk Susu' />
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

export default ProdukSusu;
