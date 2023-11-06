import { Button, Row } from "antd";

import notFound from "../assets/404page.png";
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
            width={700}
            loading="lazy"
            // style={{ objectFit: "contain" }}
            alt="404 not found"
          />
        </Row>
        <div className="mt-5 flex justify-center">
          <Link href="/home">
            <Button className="bg-[#1677ff]" type="primary">
              Back Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
