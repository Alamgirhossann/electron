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
    title: {
      display: true,
      text: "Completed Projects",
    },
  },
};

const labels = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export const data = {
  labels,
  datasets: [
    {
      label: "Projects",
      data: [12, 19, 15, 15, 13, 17, 19, 20, 25, 23, 30, 32],
      //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "#f14c36",
    },
  ],
};

const ProjectCompletedChart = () => {
  return <Line height={500} width={300} options={options} data={data} />;
};

export default ProjectCompletedChart;
