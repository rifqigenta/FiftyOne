import React from "react";
import { useState } from "react";
import { ModalTambahBarang } from "../../../components/Modal/ModalTambahBarang";
import AdminSidebar from "../../../components/layout/AdminSidebar";
import TableUser from "../../../components/Table/TableUser";
import SwalButtonDelete from "../../../components/Swal/SwalButtonDelete";

const GetDate = () => {
  //   const today = new Date();
  //   const month = today.getMonth() + 1;
  //   const year = today.getFullYear();
  //   const date = today.getDate();
  //   const time = today.getTime();
  //   const [currentDate, setCurrentDate] = useState(getDate());
  let tempDate = new Date();
  let date = tempDate.getFullYear() + "-" + (tempDate.getMonth() + 1) + "-" + tempDate.getDate() + " " + tempDate.getHours() + ":" + tempDate.getMinutes() + ":" + tempDate.getSeconds();
  const currDate = date;
  return (
    <>
      <p>{currDate}</p>
    </>
  );
};

const headers = [
  {
    no: "No",
    kode: "Kode",
    email: "Email",
    tanggalBergabung: "Tanggal Bergabung",
    aksi: "aksi",
    // gambar: "Gambar",
  },
];
const dataUser = [
  {
    id: 1,
    kode: "U001",
    email: "exampleemail@gmail.com",
    join: <GetDate />,
    button: <SwalButtonDelete />,
  },
  {
    id: 2,
    kode: "U001",
    email: "exampleemail@gmail.com",
    join: <GetDate />,
    button: <SwalButtonDelete />,
  },
  {
    id: 3,
    kode: "U001",
    email: "exampleemail@gmail.com",
    join: <GetDate />,
    button: <SwalButtonDelete />,
  },
  {
    id: 4,
    kode: "U001",
    email: "exampleemail@gmail.com",
    join: <GetDate />,
    button: <SwalButtonDelete />,
  },
  {
    id: 5,
    kode: "U001",
    email: "exampleemail@gmail.com",
    join: <GetDate />,
    button: <SwalButtonDelete />,
  },
];

const UserAccount = () => {
  const [rows, setRows] = useState(dataUser);
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
              <h1 className='text-[24px] text-black font-bold'>Akun Pengguna</h1>
              {/* <ModalTambahBarang /> */}
            </div>
            <div className='overflow-x-auto'>
              <TableUser data={rows} header={header} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccount;
