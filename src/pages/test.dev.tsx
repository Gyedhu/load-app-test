import React from "react";
import { NavigationButton } from "~/_features/layout/navbar/_components/NavigationButton";
import SidebarButton from "~/_features/layout/sidebar/_components/SidebarButton";

import { IoHomeOutline } from "react-icons/io5";

const Dev = () => {
  return (
    <div>
      <NavigationButton isActive={true}>Trainings </NavigationButton>

      <SidebarButton isExpanded={false} icon={<IoHomeOutline />}>
        Home
      </SidebarButton>
    </div>
  );
};

export default Dev;
