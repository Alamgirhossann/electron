import React from "react";
import { Layout, Row, Col } from "antd";
import Link from "next/link";

const { Footer: AndFooter } = Layout;

const Footer = () => {
  return (
    <>
      <AndFooter style={{ backgroundColor: "#001529", color: "white" }}>
        <Row justify="center">
          <Col xs={24} sm={8}>
            <h2 className="md:text-3xl text-xl mb-3 font-bold">Eectron</h2>
            <p className="md:text-xl text-md">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it.
            </p>
          </Col>
          <Col className="py-10 md:px-10 sm:py-0" xs={24} sm={8}>
            <h2 className="md:text-3xl text-xl mb-3 font-bold">Useful Link</h2>
            <div className="md:text-xl text-md">
              <Link className="text-white" href="/home">
                Home
              </Link>
            </div>
            <div className="md:text-xl text-md">
              {" "}
              <Link className="text-white" href="/home/#about">
                About
              </Link>
            </div>
            <div className="md:text-xl text-md">
              <Link className="text-white" href="/home/#project">
                Our Projects
              </Link>
            </div>

            <div className="md:text-xl text-md">
              <Link className="text-white" href="/home/#testimonial">
                Testimonial
              </Link>
            </div>
            <div className="md:text-xl text-md">
              <Link className="text-white" href="/home/#contact">
                Contact Us
              </Link>
            </div>
            <div className="md:text-xl text-md">
              <Link className="text-white" href="/policy">
                Our Policy
              </Link>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <h2 className="md:text-3xl text-xl mb-3 font-bold">Contact</h2>

            <div className="flex md:text-xl text-md">
              <p className="me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="md:w-10 md:h-10 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </p>
              <p>
                It is a long established fact that a reader will be distracted
              </p>
            </div>
            <div className="flex md:text-xl my-4 text-md">
              <p className="me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="md:w-10 md:h-10 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </p>
              <p>
                (+71) 1234567890
                <br />
                (+71) 1234567890
              </p>
            </div>
            <div className="flex md:text-xl text-md">
              <p className="me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="md:w-10 md:h-10 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </p>
              <p>electron@gmail.com</p>
            </div>
          </Col>
        </Row>
      </AndFooter>
    </>
  );
};

export default Footer;
