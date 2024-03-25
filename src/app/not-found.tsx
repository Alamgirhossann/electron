import { Button, Row } from "antd";

import notFound from "../assets/404page.gif";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Row>
          <Image
            src={notFound}
            width={400}
            loading="lazy"
            // style={{ objectFit: "contain" }}
            alt="404 not found"
          />
        </Row>
        <div className=" flex justify-center">
          <Link href="/">
            <button className="bg-[#f14c36] px-5 py-2 text-white rounded-md">
              Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
