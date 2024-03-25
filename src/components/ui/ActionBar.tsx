// import React from "react";
import styles from "../ui/style.module.css";

type ActionBarProps = {
  title: string;
  children: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div>
      <h1 className=" flex justify-center md:text-2xl text-lg font-bold my-4">
        <span className={`${styles.customShape}`}>{title}</span>
      </h1>
      <div
        // style={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   alignItems: "center",
        //   margin: "10px 0px",
        // }}
        className="md:flex justify-between items-center my-3"
      >
        {children}
      </div>
    </div>
  );
};

export default ActionBar;
