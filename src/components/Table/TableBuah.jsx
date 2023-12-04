import React from "react";

const RowHeader = (val) => {
  const { no, kode, namaBarang, stok, gambar } = val;
  return (
    <>
      <tr>
        <th>{no}</th>
        <th>{kode}</th>
        <th>{namaBarang}</th>
        <th>{stok}</th>
        <th>{gambar}</th>
      </tr>
    </>
  );
};

const RowData = (val) => {
  const { id, kode, nama, stock, img } = val;
  return (
    <>
      <tr className='text-black hover:bg-[#00b207] hover:bg-opacity-50'>
        <td>{id}</td>
        <td>{kode}</td>
        <td>{nama}</td>
        <td>{stock}</td>
        <td>{img}</td>
      </tr>
    </>
  );
};

const TableBuah = (val) => {
  const { data, header } = val;
  return (
    <>
      <table className='table'>
        {/* head */}
        <thead className='bg-[#00b207] text-white'>
          {/* <tr> */}
          {header.map((rowHeader) => (
            <RowHeader no={rowHeader.no} kode={rowHeader.kode} namaBarang={rowHeader.namaBarang} stok={rowHeader.stok} gambar={rowHeader.gambar} />
          ))}
          {/* </tr> */}
        </thead>
        <tbody>
          {data.map((rowData) => (
            <RowData id={rowData.id} kode={rowData.kode} nama={rowData.nama} stock={rowData.stock} img={rowData.img} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableBuah;
