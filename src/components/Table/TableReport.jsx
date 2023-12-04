import React from "react";

const RowHeader = (val) => {
  const { no, profit, stok, bulan } = val;
  return (
    <>
      <tr>
        <th>{no}</th>
        <th>{profit}</th>
        <th>{stok}</th>
        <th>{bulan}</th>
      </tr>
    </>
  );
};

const RowData = (val) => {
  const { id, profit, stok, bulan } = val;
  return (
    <>
      <tr className='text-black hover:bg-[#00b207] hover:bg-opacity-50'>
        <td>{id}</td>
        <td>{profit}</td>
        <td>{stok}</td>
        <td>{bulan}</td>
      </tr>
    </>
  );
};

const TableReport = (val) => {
  const { data, header } = val;
  return (
    <>
      <table className='table'>
        {/* head */}
        <thead className='bg-[#00b207] text-white'>
          {/* <tr> */}
          {header.map((rowHeader) => (
            <RowHeader no={rowHeader.no} profit={rowHeader.profit} stok={rowHeader.stok} bulan={rowHeader.bulan} />
          ))}
          {/* </tr> */}
        </thead>
        <tbody>
          {data.map((rowData) => (
            <RowData id={rowData.id} profit={rowData.profit} stok={rowData.stok} bulan={rowData.bulan} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableReport;
