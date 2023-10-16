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
        <div>
          {/* <Spin tip="Loading" size="large"></Spin> */}
          <p>Loading...</p>
        </div>
      </Row>
    </>
  );
};

export default Loading;
