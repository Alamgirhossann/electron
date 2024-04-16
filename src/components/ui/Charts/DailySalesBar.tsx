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
      text: "Daily Sales",
    },
  },
};

const labels = ["M", "T", "W", "T", "F", "S", "S"];

export const data = {
  labels,
  datasets: [
    {
      label: "Daily Sales",
      data: [993, 1114, 1225, 2219, 3333, 4555, 5552],
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#f14c36",
    },
  ],
};

const DailySalesBar = () => {
  return <Bar height={500} width={500} options={options} data={data} />;
};

export default DailySalesBar;
