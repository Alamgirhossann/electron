import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import Link from "next/link";

const SideNavigation = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor, currentMode } =
    useStateContext();
  const activeLink: any =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-200 text-md m-2";
  const normalLink: any =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-200 m-2";
  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <div>
          <div className="flex justify-between items-center">
            <Link
              href="/"
              onClick={handleCloseSidebar}
              className={`items-center gap-3 ml-3
      mt-4 flex text-xl font-extrabold tracking-tight ${
        currentMode === "Dark" ? "text-white" : ""
      } `}
            >
              <SiShopware /> <span>Shoffy</span>
            </Link>
            <TooltipComponent content="Cancel" position="BottomCenter">
              <button
                onClick={() =>
                  setActiveMenu((prevActiveMenu: any) => !prevActiveMenu)
                }
                type="button"
                className={` text-xl rounded-full p-3 hover:bg-gray-100 mt-4 block md:hidden ${
                  currentMode === "Dark" ? "text-white hover:bg-gray-500" : ""
                }`}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className=" text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <Link
                    href={`/${link.name}`}
                    key={link.name}
                    // className={({ isActive }) => ({
                    //   backgroundColor: isActive ? currentColor : "",
                    // })}
                    // onClick={handleCloseSidebar}
                    // className={({ isActive }) =>
                    //   isActive ? activeLink : normalLink
                    // }
                  >
                    {link.icon}
                    <span className=" capitalize">{link.name}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNavigation;
