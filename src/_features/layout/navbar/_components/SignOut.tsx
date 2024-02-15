import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { PiSignOutBold } from "react-icons/pi";
import IconButton from "~/_components/IconButton";

function SignOut() {
  return (
    <IconButton>
      <PiSignOutBold size={22} />
    </IconButton>
  );
}

export default SignOut;
