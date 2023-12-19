import React, { useEffect } from "react";
import { useState } from "react";
import { ModalTambahBarang } from "../../../components/Modal/ModalTambahBarang";
import AdminSidebar from "../../../components/layout/AdminSidebar";
import TableReport from "../../../components/Table/TableReport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

const headers = [
  {
    no: "No",
    waktu: "Waktu",
    kode: "Kode Pesanan",
    nama: "Nama Pengguna",
    total: "Total Pesanan (Rp)",
  },
];

const Report = () => {
  const [rows, setRows] = useState([]);
  const [header, setHeader] = useState(headers);
  const [isOpen, setIsOpen] = useState(true);
  const handlerOpen = () => {
    setIsOpen(!isOpen);
  };

  const getData = () => {
    fetch("/reports/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const dataReport = data.map((item) => ({
          id: item.id,
          time: item.createdAt,
          code: item.code_trans,
          name: item.name,
          total: item.tot_price,
        }));
        setRows(dataReport);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={`h-screen bg-white ${isOpen ? "pl-[280px]" : "pl-20"}`}>
        <AdminSidebar handlerOpen={handlerOpen} />
        <div className='flex'>
          <div className='px-8 py-12 w-full'>
            <div className='flex justify-between mb-8'>
              <h1 className='text-[24px] text-black font-bold'>Report</h1>
            </div>
            <div className='overflow-x-auto'>
              <TableReport data={rows} header={header} />
            </div>
            <div className='mt-4'>
              <button className='btn bg-[#191919] bg-opacity-25 border-transparent text-black hover:bg-opacity-100 hover:text-white hover:border-transparent'>
                Cetak <FontAwesomeIcon icon={faPrint} className='ml-4' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
