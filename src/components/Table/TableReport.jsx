import React from "react";

const RowHeader = (val) => {
  const { no, waktu, kode, nama, total } = val;
  return (
    <>
      <tr>
        <th>{no}</th>
        <th>{waktu}</th>
        <th>{kode}</th>
        <th>{nama}</th>
        <th>{total}</th>
      </tr>
    </>
  );
};

const RowData = (val) => {
  const { id, time, code, name, total } = val;
  return (
    <>
      <tr className='text-black hover:bg-[#00b207] hover:bg-opacity-50'>
        <td>{id}</td>
        <td>{time}</td>
        <td>{code}</td>
        <td>{name}</td>
        <td>{total}</td>
      </tr>
    </>
  );
};

const TableReport = (val) => {
  const { data, header } = val;
  return (
    <>
      <table className='table'>
        <thead className='bg-[#00b207] text-white'>
          {header.map((rowHeader) => (
            <RowHeader no={rowHeader.no} waktu={rowHeader.waktu} kode={rowHeader.kode} nama={rowHeader.nama} total={rowHeader.total} />
          ))}
        </thead>
        <tbody>
          {data.map((rowData) => (
            <RowData id={rowData.id} time={rowData.time} code={rowData.code} name={rowData.name} total={rowData.total} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableReport;
