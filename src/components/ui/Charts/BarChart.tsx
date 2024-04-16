import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
};

const labels = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [8, 4, 3, 5, 2, 13, 11, 4, 3, 5, 2, 5],
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#f14c36",
    },
    {
      label: "Dataset 2",
      data: [12, 19, 3, 5, 2, 3, 4, 12, 19, 3, 5, 2],
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.8)",
    },
  ],
};

const BarChart = () => {
  return <Bar height={500} width={300} options={options} data={data} />;
};

export default BarChart;
