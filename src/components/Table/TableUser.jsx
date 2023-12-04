import React from "react";

const RowHeader = (val) => {
  const { no, kode, email, tanggalBergabung, aksi } = val;
  return (
    <>
      <tr>
        <th>{no}</th>
        <th>{kode}</th>
        <th>{email}</th>
        <th>{tanggalBergabung}</th>
        <th className='px-8'>{aksi}</th>
      </tr>
    </>
  );
};

const RowData = (val) => {
  const { id, kode, email, join, button } = val;
  return (
    <>
      <tr className='text-black hover:bg-[#00b207] hover:bg-opacity-50'>
        <td>{id}</td>
        <td>{kode}</td>
        <td>{email}</td>
        <td>{join}</td>
        <td>{button}</td>
      </tr>
    </>
  );
};

const TableUser = (val) => {
  const { data, header } = val;
  return (
    <>
      <table className='table'>
        {/* head */}
        <thead className='bg-[#00b207] text-white'>
          {/* <tr> */}
          {header.map((rowHeader) => (
            <RowHeader no={rowHeader.no} kode={rowHeader.kode} email={rowHeader.email} tanggalBergabung={rowHeader.tanggalBergabung} aksi={rowHeader.aksi} />
          ))}
          {/* </tr> */}
        </thead>
        <tbody>
          {data.map((rowData) => (
            <RowData id={rowData.id} kode={rowData.kode} email={rowData.email} join={rowData.join} button={rowData.button} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
