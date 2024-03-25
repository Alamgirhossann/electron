import AutoCounting from "./AutoCounting";
import styles from "../ui/style.module.css";
const CountingOnScroll: React.FC = () => {
  return (
    <>
      <div className={`${styles.bgImage} py-10`}>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-sm mx-2 my-4 overflow-hidden rounded shadow-lg text-center w-72 py-5 bg-white">
            <span className="flex justify-center text-[#f14c36]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <div className="text-[35px] font-bold pt-3 text-gray-500">
              <AutoCounting start={0} end={1250} />
            </div>
            <div className="px-6 py-4 text-gray-500">
              <div className="text-xl mb-2 tracking-wide">Hours Worked</div>
            </div>
          </div>

          <div className="max-w-sm mx-2 my-4 overflow-hidden rounded shadow-lg text-center w-72 py-5 bg-white">
            <span className="flex justify-center text-[#f14c36]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
            <div className="text-[35px] font-bold pt-3 text-gray-500">
              <AutoCounting start={0} end={400} />
            </div>

            <div className="px-6 py-4 text-gray-500">
              <div className="text-xl mb-2 tracking-wide">Satisfied Client</div>
            </div>
          </div>

          <div className="max-w-sm mx-2 my-4 overflow-hidden rounded shadow-lg text-center w-72 py-5 bg-white">
            <span className="flex justify-center text-[#f14c36]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
            </span>
            <div className="text-[35px] font-bold pt-3 text-gray-500">
              <AutoCounting start={0} end={250} />
            </div>
            <div className="px-6 py-4 text-gray-500">
              <div className="text-xl mb-2 tracking-wide">
                Project Completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountingOnScroll;
