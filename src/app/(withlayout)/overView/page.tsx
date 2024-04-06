"use client";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
// import { GoPrimitiveDot } from "react-icons/go";
import { earningData } from "../../../data/dummy";

import { useStateContext } from "@/contexts/ContextProvider";
import PieChart from "@/components/ui/Charts/Pie";
import LineChart from "@/components/ui/Charts/LineChart";
import StackedBar from "@/components/ui/Charts/Stacked";
import BarChart from "@/components/ui/Charts/BarChart";
import DailySalesBar from "@/components/ui/Charts/DailySalesBar";
import EmailSubscription from "@/components/ui/Charts/EmailSubscription";
import ProjectCompletedChart from "@/components/ui/Charts/ProjectCompleted";
import Image from "next/image";
import ima from "../../../assets/banner.jpg";

const OverView = () => {
  const { currentColor } = useStateContext();
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-gray-200 md:p-4 p-2">
        <div className="md:w-[25%]">
          <div className="px-2">
            <div className="flex flex-col md:flex-row lg:flex-col gap-3 ">
              {earningData.map((item: any) => (
                <div
                  key={item.title}
                  className="bg-white h-[250px] dark:text-gray-200 w-40 md:w-48 lg:w-56  p-4 pt-9 rounded-md flex"
                >
                  <div>
                    <button
                      type="button"
                      style={{
                        color: item.iconColor,
                        backgroundColor: item.iconBg,
                      }}
                      className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                    >
                      {item.icon}
                    </button>
                  </div>
                  <div>
                    <p className="mt-3">
                      <span className="text-lg font-semibold">
                        {item.amount}
                      </span>
                      <span className={`text-sm text-${item.pcColor} ml-2`}>
                        {item.percentage}
                      </span>
                    </p>
                    <p className="text-sm text-gray-400  mt-1">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-2 lg:px-3">
          <div className="flex flex-col md:flex-row">
            {/* <div className="md:flex-1">
              <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white p-2 h-[250px] flex justify-center">
                  <PieChart />
                </div>
                <div className="bg-white p-2 h-[250px] flex justify-center">
                  <Sta />
                </div>
              </div>
              
            </div> */}
            <div className=" md:w-[30%] my-2 lg:my-0">
              <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start">
                <div className="bg-white p-2 md:h-[200px] h-[250px] flex justify-center items-center rounded-md">
                  <PieChart />
                </div>
                <div className="bg-white mt-1 p-2 md:h-[300px] h-[250px] flex justify-center items-center rounded-md">
                  <StackedBar />
                </div>
              </div>
            </div>
            <div className="md:flex-1 mt-2 lg:mt-0">
              <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-4">
                <div className="bg-white p-2 h-[250px] flex justify-center rounded-md">
                  <BarChart />
                </div>
                <div className="bg-white p-2 h-[250px] flex justify-center rounded-md">
                  <ProjectCompletedChart />
                </div>
              </div>
              <div className="bg-white mt-3 p-2 h-[250px] grid grid-cols-1 justify-center rounded-md">
                <LineChart />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 ">
            <div className="bg-white p-2 h-[250px] flex justify-center rounded-md">
              <EmailSubscription />
            </div>
            <div className="bg-white p-2 h-[250px]  flex justify-center rounded-md">
              <DailySalesBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverView;
