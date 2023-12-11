import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
  const option = {
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
      title: {
        display: true,
        text: "Rata - Rata Penjualan Per-Tahun",
      },
    },
  };
  const statistik = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Buah",
        backgroundColor: "#142459",
        borderColor: "rgba(0,0,0,0)",
        data: [100, 20, 160, 120, 159, 170, 10, 120, 151, 154, 50, 15],
      },
      {
        label: "Bumbu",
        backgroundColor: "#176ba0",
        borderColor: "rgba(0,0,0,0)",
        data: [100, 20, 160, 120, 159, 170, 10, 120, 151, 154, 50, 15],
      },
      {
        label: "Daging",
        backgroundColor: "#19aade",
        borderColor: "rgba(0,0,0,0)",
        data: [100, 20, 160, 120, 159, 170, 10, 120, 151, 154, 50, 15],
      },
      {
        label: "Produk Susu",
        backgroundColor: "#1ac9e6",
        borderColor: "rgba(0,0,0,0)",
        data: [100, 20, 160, 120, 159, 170, 10, 120, 151, 154, 50, 15],
      },
      {
        label: "Sayuran",
        backgroundColor: "#1de4bd",
        borderColor: "rgba(0,0,0,0)",
        data: [100, 20, 160, 120, 159, 170, 10, 120, 151, 154, 50, 15],
      },
      {
        label: "Sembako",
        backgroundColor: "#6df0d2",
        borderColor: "rgba(0,0,0,0)",
        data: [100, 20, 160, 120, 159, 170, 10, 120, 151, 154, 50, 15],
      },
      {
        label: "3T",
        backgroundColor: "#c7f9ee",
        borderColor: "rgba(0,0,0,0)",
        data: [100, 20, 160, 120, 159, 170, 10, 120, 151, 154, 50, 15],
      },
      {
        label: "Lain-lain",
        backgroundColor: "#d7f9ee",
        borderColor: "rgba(1,1,1,1)",
        data: [100, 20, 160, 120, 159, 170, 10, 120, 151, 154, 50, 15],
      },
    ],
  };
  return (
    <>
      <div className=' w-full'>
        <Bar data={statistik} options={option} />
      </div>
    </>
  );
};

export default Chart;
