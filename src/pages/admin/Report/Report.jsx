import React from "react";
import { useState } from "react";
import { ModalTambahBarang } from "../../../components/Modal/ModalTambahBarang";
import AdminSidebar from "../../../components/layout/AdminSidebar";
import TableReport from "../../../components/Table/TableReport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

const headers = [
  {
    no: "No",
    profit: "Total Penjualan (Profit)",
    stok: "Total Penjualan (Stok)",
    bulan: "Bulan",
  },
];
const dataReport = [
  {
    id: 1,
    profit: 2000000,
    stok: 500,
    bulan: "Jan",
  },
  {
    id: 2,
    profit: 2000000,
    stok: 500,
    bulan: "Feb",
  },
  {
    id: 3,
    profit: 2000000,
    stok: 500,
    bulan: "Mar",
  },
  {
    id: 4,
    profit: 2000000,
    stok: 500,
    bulan: "Apr",
  },
  {
    id: 5,
    profit: 2000000,
    stok: 500,
    bulan: "May",
  },
  {
    id: 6,
    profit: 2000000,
    stok: 500,
    bulan: "Jun",
  },
  {
    id: 7,
    profit: 2000000,
    stok: 500,
    bulan: "Jul",
  },
  {
    id: 8,
    profit: 2000000,
    stok: 500,
    bulan: "Aug",
  },
  {
    id: 9,
    profit: 2000000,
    stok: 500,
    bulan: "Sep",
  },
  {
    id: 10,
    profit: 2000000,
    stok: 500,
    bulan: "Okt",
  },
  {
    id: 11,
    profit: 2000000,
    stok: 500,
    bulan: "Nov",
  },
  {
    id: 12,
    profit: 2000000,
    stok: 500,
    bulan: "Dec",
  },
];

const Report = () => {
  const [rows, setRows] = useState(dataReport);
  const [header, setHeader] = useState(headers);

  return (
    <>
      <div className='h-auto bg-white pl-[280px]'>
        <AdminSidebar />
        <div className='flex'>
          <div className='px-8 py-12 w-full'>
            <div className='flex justify-between mb-8'>
              <h1 className='text-[24px] text-black font-bold'>Report</h1>
              {/* <ModalTambahBarang /> */}
              <input type='date' className='text-[15px] py-0 bg-transparent border border-black pl-2' />
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
