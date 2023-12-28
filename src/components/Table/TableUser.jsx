import React from "react";

const RowHeader = (val) => {
  const { no, email, nama, tanggalBergabung, aksi } = val;
  return (
    <>
      <tr>
        <th>{no}</th>
        <th>{email}</th>
        <th>{nama}</th>
        <th>{tanggalBergabung}</th>
        <th className='px-8'>{aksi}</th>
      </tr>
    </>
  );
};

const RowData = (val) => {
  const { id, email, name, join, button } = val;
  return (
    <>
      <tr className='text-black hover:bg-[#00b207] hover:bg-opacity-50'>
        <td>{id}</td>
        <td>{email}</td>
        <td>{name}</td>
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
        <thead className='bg-[#00b207] text-white'>
          {header.map((rowHeader) => (
            <RowHeader no={rowHeader.no} email={rowHeader.email} nama={rowHeader.nama} tanggalBergabung={rowHeader.tanggalBergabung} aksi={rowHeader.aksi} />
          ))}
        </thead>
        <tbody>
          {data.map((rowData) => (
            <RowData id={rowData.id} email={rowData.email} name={rowData.name} join={rowData.join} button={rowData.button} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
