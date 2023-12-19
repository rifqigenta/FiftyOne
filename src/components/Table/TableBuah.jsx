import React from "react";

const RowHeader = (val) => {
  const { no, kode, namaBarang, stok, harga, jenis, gambar } = val;
  return (
    <>
      <tr>
        <th>{no}</th>
        <th>{kode}</th>
        <th>{namaBarang}</th>
        <th>{stok}</th>
        <th>{harga}</th>
        {/* <th>{jenis}</th> */}
        <th>{gambar}</th>
      </tr>
    </>
  );
};

const RowData = (val) => {
  const { id, kode, nama, stock, price, type, img } = val;
  return (
    <>
      <tr className='text-black hover:bg-[#00b207] hover:bg-opacity-50'>
        <td>{id}</td>
        <td>{kode}</td>
        <td>{nama}</td>
        <td>{stock}</td>
        <td>{price}</td>
        {/* <td>{type}</td> */}
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
        <thead className='bg-[#00b207] text-white'>
          {header.map((rowHeader) => (
            <RowHeader no={rowHeader.no} kode={rowHeader.kode} namaBarang={rowHeader.namaBarang} stok={rowHeader.stok} harga={rowHeader.harga} jenis={rowHeader.jenis} gambar={rowHeader.gambar} />
          ))}
        </thead>
        <tbody>
          {data.map((rowData) => (
            <RowData id={rowData.id} kode={rowData.kode} nama={rowData.nama} stock={rowData.stock} price={rowData.price} type={rowData.type} img={rowData.img} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableBuah;
