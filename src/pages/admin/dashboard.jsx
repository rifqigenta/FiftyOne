import React, { useState } from "react";
import AdminSidebar from "../../components/layout/AdminSidebar";
import Chart from "../../components/Chart/Chart";

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handlerOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={`h-auto bg-white ${isOpen ? `pl-[280px]` : `pl-20`}`}>
        <AdminSidebar handlerOpen={handlerOpen} />
        <div className='flex'>
          <div className='px-8 py-8 w-full'>
            <h1 className='text-black font-bold text-[24px] mb-8'>Dashboard</h1>
            <div className='flex w-full justify-start gap-4 text-white font-bold'>
              <div className='bg-[#00B207] w-[324px] px-8 py-6 flex justify-center rounded-[10px]'>Total Penjualan (1500pcs)</div>
              <div className='bg-[#00B207] w-[324px] px-8 py-6 flex justify-center rounded-[10px]'>Total Kategori (9 Kategori)</div>
            </div>
            <div className='w-full rounded-[10px] mt-8 p-4 bg-[#F4F4F4] shadow-xl'>
              <div className='flex justify-between'>
                <h1 className='text-[24px] text-black font-bold'>Statistik</h1>
                <div className='flex gap-4 text-md text-black font-bold'>
                  <div className=''>Per Bulan</div>
                  <div>
                    <input type='date' className='rounded-[10px] text-white pl-2' />
                  </div>
                </div>
              </div>
              <div>
                <Chart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* Open the modal using document.getElementById('ID').showModal() method */
}
