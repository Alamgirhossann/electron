import Image from "next/image";
import heading_icon from "../../assets/heading_icon.png";
import header_img from "../../assets/about.jpg";
import icon from "../../assets/icon.jpg";
import styles from "../ui/style.module.css";

const AboutUs = () => {
  return (
    <div className="pb-10 bg-white">
      <h1 className="flex justify-center md:text-[30px] text-xl md:pb-16 md:pt-20 pt-10 pb-8 font-bold">
        <span className={`${styles.customShape}`}>About</span>
        <span className="ms-3 text-[#f14c36]"> Us</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <div className="p-4 bg-white">
          <div className="flex justify-center">
            <Image
              src={header_img}
              alt=""
              className="md:h-[450px] md:w-[450px] h-[250]"
            />
          </div>
        </div>
        <div className="p-4 bg-white text-gray-500">
          <h5 className="text-[18px] text-[#f14c36] font-bold tracking-wider">
            We Are The Best Electrical Services Providers
          </h5>
          <p className="text-md py-2 tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            recusandae placeat atque mollitia, quaerat quidem voluptatibus
            magnam laboriosam deleniti quis. In tenetur dolorum ipsa vel!
          </p>
          <p className="text-md py-2 tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            recusandae placeat atque mollitia, quaerat quidem voluptatibus
          </p>
          <div className="py-2">
            <p className="flex py-1">
              <span className="text-[#f14c36]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 bg-{#f14c36} me-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </span>
              30+ years of experience in Electrical & repairing Services.
            </p>
            <p className="flex py-1">
              <span className="text-[#f14c36]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 bg-{#f14c36} me-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </span>
              100% job satisfaction and guarantee ever
            </p>
            <p className="flex py-1">
              <span className="text-[#f14c36]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 bg-{#f14c36} me-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </span>{" "}
              Best quality Techinicialns and engineers
            </p>
            <p className="flex py-1">
              <span className="text-[#f14c36]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 bg-{#f14c36} me-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </span>
              All modern machineries
            </p>
            <p className="flex py-1">
              <span className="text-[#f14c36]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 bg-{#f14c36} me-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </span>
              30+ years of experience in Electrical & repairing Services.
            </p>
            <p className="flex py-1">
              <span className="text-[#f14c36]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 bg-{#f14c36} me-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </span>
              100% job satisfaction and guarantee ever
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
