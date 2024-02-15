import { useState } from "react";
import { FaChartLine, FaChartPie } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import ExpandableLogo from "./ExpandableLogo";
import SidebarButton from "./SidebarButton";
import clsx from "clsx";

const SideBar = () => {
  const [isExpanded, setIsExpaded] = useState(false);

  return (
    <div className="w-[80px] shadow-xl">
      <div
        className={
          clsx(
            `h-full bg-white transition-[width] flex flex-col items-center p3 overflow-hidden`,
            isExpanded ? "w-[200px] shadow-lg" : "w-[75px]",
          )
        }
        onMouseEnter={() => setIsExpaded(true)}
        onMouseLeave={() => setIsExpaded(false)}
      >
        <ExpandableLogo isExpanded={isExpanded} />
        <div className="flex flex-col my-10 w-[85%] gap-5 items-center">
          {[
            {
              label: "Home",
              icon: <MdHome size={22} />,
              path: "/home.dev",
            },
            {
              label: "Requests",
              icon: <FaRegCircleQuestion size={22} />,
              path: "/requests.dev",
            },
            {
              label: "Reports",
              icon: <FaChartPie size={22} />,
              path: "/reports.dev",
            },
            {
              label: "Analytics",
              icon: <FaChartLine size={22} />,
              path: "/",
            },
            {
              label: "Admin",
              icon: <RiAdminLine size={22} />,
              path: "/",
            },
          ].map((item, index) => (
            <SidebarButton
              key={index}
              isExpanded={isExpanded}
              icon={item.icon}
              path={item.path}
            >
              {item.label}
            </SidebarButton>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
