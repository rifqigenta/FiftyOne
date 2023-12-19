import React, { useEffect } from "react";
import { useState } from "react";
import { ModalTambahBarang } from "../../../components/Modal/ModalTambahBarang";
import AdminSidebar from "../../../components/layout/AdminSidebar";
import TableUser from "../../../components/Table/TableUser";
import SwalButtonDelete from "../../../components/Swal/SwalButtonDelete";

const GetDate = () => {
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
    email: "Email",
    nama: "Nama Pengguna",
    tanggalBergabung: "Tanggal Bergabung",
    aksi: "Aksi",
  },
];
// const dataUser = [
//   {
//     id: 1,
//     email: "exampleemail@gmail.com",
//     join: <GetDate />,
//     button:
//   },
// ];
const UserAccount = () => {
  const [rows, setRows] = useState([]);
  const [header, setHeader] = useState(headers);
  const [isOpen, setIsOpen] = useState(true);
  const handlerOpen = () => {
    setIsOpen(!isOpen);
  };

  const getData = () => {
    fetch("/users/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const dataUser = data.map((item) => ({
          id: item.id,
          email: item.email,
          name: item.name,
          join: item.createdAt,
          button: <SwalButtonDelete id={item.id} deleteData={deleteData} />,
        }));
        setRows(dataUser);
      });
  };

  const deleteData = (id) => {
    fetch(`/users/${id}`, {
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
