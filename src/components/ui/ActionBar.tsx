// import React from "react";

type ActionBarProps = {
  title: string;
  children: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div>
      <h1 className="md:text-2xl text-lg font-bold my-4">{title}</h1>
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
