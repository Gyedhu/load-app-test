import React, { type ReactNode } from "react";

interface SidebarButtons {
  children: ReactNode;
  isExpanded: boolean;
  icons: ReactNode;
}
function SidebarButton(props: SidebarButtons) {
  const { children, icons, isExpanded } = props;
  return (
    <>
      <button
        className={`btn min-h-[50px] bg-primary text-white hover:bg-primary ${isExpanded ? "bg-primary  text-white hover:bg-primary" : "btn btn-active w-[50px] border-0 shadow-[0px]"}`}
      >
        {icons}
        {isExpanded ? children : ""}
      </button>
    </>
  );
}

export default SidebarButton;
