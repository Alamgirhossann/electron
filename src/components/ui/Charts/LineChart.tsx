"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export const data = {
  labels,
  datasets: [
    {
      label: "Expense",
      data: [8, 4, 3, 5, 2, 13, 11, 4, 3, 5, 2, 5],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Budget",
      data: [12, 19, 3, 5, 2, 3, 4, 12, 19, 3, 5, 2],
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const LineChart = () => {
  return (
    <div className="w-full md:h-[250px]">
      <Line height={500} width={1500} options={options} data={data} />;
    </div>
  );
};

export default LineChart;
