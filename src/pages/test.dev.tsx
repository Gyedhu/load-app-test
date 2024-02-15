import React from "react";
import { NavigationButton } from "~/_features/layout/navbar/_components/NavigationButton";
import SidebarButton from "~/_features/layout/sidebar/_components/SidebarButton";

import { IoHomeOutline } from "react-icons/io5";
import IconButton from "~/_components/IconButton";
import AddIcon from "~/_features/layout/navbar/_components/AddIcon";
import SignOut from "~/_features/layout/navbar/_components/SignOut";
import EditIcon from "~/_features/layout/navbar/_components/EditIcon";

const Dev = () => {
  return (
    <div className="h-screen">
      <div className=" flex h-full items-center  justify-center gap-5">
        <AddIcon /> <SignOut /> <EditIcon />
      </div>
    </div>
  );
};

export default Dev;
