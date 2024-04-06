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
      text: "Email Subscription",
    },
  },
};

const labels = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export const data = {
  labels,
  datasets: [
    {
      label: "Email Subscription",
      data: [512, 719, 883, 775, 442, 993, 1114, 1215, 1952, 1553, 2555, 3332],
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const EmailSubscription = () => {
  return <Line height={500} width={500} options={options} data={data} />;
};

export default EmailSubscription;
