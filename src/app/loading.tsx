import { Row, Space, Spin } from "antd";

const Loading = () => {
  return (
    <>
      {" "}
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        {/* <div>
          <Spin tip="Loading" size="large"></Spin>
        </div> */}
        <span className="relative flex h-8 w-8">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f14c36] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-8 w-8 bg-[#f14c36]"></span>
        </span>
      </Row>
    </>
  );
};

export default Loading;
