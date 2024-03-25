import React, { useEffect, useState } from "react";
import { Button, FloatButton } from "antd";
import { UpOutlined } from "@ant-design/icons";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* <FloatButton.BackTop visibilityHeight={100}> */}
      <div>
        <button
          className="bg-[#f14c36] w-10 h-10 rounded-full "
          onClick={scrollToTop}
          style={{
            display: visible ? "block" : "none",
            position: "fixed",
            bottom: "50px",
            right: "50px",
            boxShadow: "0px 2px 50px",
          }}
        >
          <span className="flex justify-center items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M7.25 10.25a.75.75 0 0 0 1.5 0V4.56l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06l2.22-2.22v5.69Z" />
              <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
            </svg>
          </span>
        </button>
      </div>
      {/* </FloatButton.BackTop> */}
    </>
  );
};

export default ScrollToTopButton;
