import React from "react";

const RowHeader = (val) => {
  const { no, kode, namaBarang, stok, harga, jenis, gambar, aksi } = val;
  return (
    <>
      <tr>
        <th>{no}</th>
        <th>{kode}</th>
        <th className='w-16'>{namaBarang}</th>
        <th>{stok}</th>
        <th>{harga}</th>
        <th>{jenis}</th>
        <th>{gambar}</th>
        <th>{aksi}</th>
      </tr>
    </>
  );
};

const RowData = (val) => {
  const { id, kode, nama, stock, price, type, img, edit } = val;
  return (
    <>
      <tr className='text-black hover:bg-[#00b207] hover:bg-opacity-50'>
        <td>{id}</td>
        <td>{kode}</td>
        <td className='w-16'>{nama}</td>
        <td>{stock}</td>
        <td>{price}</td>
        <td>{type}</td>
        <td>{img}</td>
        <td>{edit}</td>
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
            <RowHeader
              no={rowHeader.no}
              kode={rowHeader.kode}
              namaBarang={rowHeader.namaBarang}
              stok={rowHeader.stok}
              harga={rowHeader.harga}
              jenis={rowHeader.jenis}
              gambar={rowHeader.gambar}
              aksi={rowHeader.aksi}
            />
          ))}
        </thead>
        <tbody>
          {data.map((rowData) => (
            <RowData id={rowData.id} kode={rowData.kode} nama={rowData.nama} stock={rowData.stock} price={rowData.price} type={rowData.type} img={rowData.img} edit={rowData.edit} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableBuah;
