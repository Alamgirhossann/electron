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
      <FloatButton.BackTop visibilityHeight={100}>
        <Button
          className="bg-blue-500"
          type="primary"
          shape="circle"
          icon={<UpOutlined />}
          size="large"
          onClick={scrollToTop}
          style={{
            display: visible ? "block" : "none",
            position: "fixed",
            bottom: "50px",
            right: "50px",
          }}
        />
      </FloatButton.BackTop>
    </>
  );
};

export default ScrollToTopButton;
