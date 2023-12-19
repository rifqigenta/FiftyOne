import React, { useEffect } from "react";
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
    // jenis: "Jenis",
    gambar: "Gambar",
  },
];
// const stockSayuran = [
//   {
//     id: 1,
//     kode: "V001",
//     nama: "Bayam",
//     stock: 200,
//     price: 2000,
//     type: "Sayuran",
//     img: <img src='/admin-stock/exbuah1.svg' />,
//   },
//   {
//     id: 2,
//     kode: "V002",
//     nama: "Kangkung",
//     stock: 200,
//     price: 2000,
//     type: "Sayuran",
//     img: <img src='/admin-stock/exbuah2.svg' />,
//   },
//   {
//     id: 3,
//     kode: "V003",
//     nama: "Brokoli",
//     stock: 200,
//     price: 2000,
//     type: "Sayuran",
//     img: <img src='/admin-stock/exbuah3.svg' />,
//   },
//   {
//     id: 4,
//     kode: "V004",
//     nama: "Genjer",
//     stock: 200,
//     price: 2000,
//     type: "Sayuran",
//     img: <img src='/admin-stock/exbuah4.svg' />,
//   },
//   {
//     id: 5,
//     kode: "V005",
//     nama: "Sawi",
//     stock: 200,
//     price: 2000,
//     type: "Sayuran",
//     img: <img src='/admin-stock/exbuah5.svg' />,
//   },
// ];

const Sayuran = () => {
  const [header, setHeader] = useState(headers);
  const [isOpen, setIsOpen] = useState(true);
  const handlerOpen = () => {
    setIsOpen(!isOpen);
  };
  const [rows, setRows] = useState([]);
  const getData = () => {
    fetch("/products/product-sayuran")
      .then((res) => res.json())
      .then((data) => {
        const stockSayuran = data.map((item) => ({
          id: item.id,
          kode: item.product_id,
          nama: item.product_name,
          stock: item.stok,
          price: item.harga,
          // img: <img src={item.gambar} />,
          img: <img className='max-w-[105px]' src={`http://localhost:4000/uploads/${item.gambar}`} />,
        }));
        setRows(stockSayuran);
      });
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
              <h1 className='text-[24px] text-black font-bold'>Sayuran</h1>
              <ModalTambahBarang title='Sayuran' getData={getData} />
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

export default Sayuran;
