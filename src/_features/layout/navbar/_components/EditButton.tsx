import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import IconButton from "~/_components/IconButton";
import clsx from "clsx";

interface IconButtons {
  toolTip?: string;
}

function EditButton(props: IconButtons) {
  const { toolTip } = props;

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    if (toolTip) {
      setIsTooltipVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IconButton>
        <AiOutlineEdit size={22} />

        {isTooltipVisible && toolTip && (
          <div
            className={clsx(
              "duration-800 absolute left-1/2 top-full mt-1 min-w-[100px] -translate-x-1/2 transform rounded-lg px-5 py-1  text-sm text-white opacity-100 transition-opacity",
              { "invisible opacity-0": !isTooltipVisible },
            )}
          >
            <p className="mt-1  w-full  min-w-[px] rounded-lg bg-[#6c6c6c] px-5 py-1 font-sans text-xs">
              {" "}
              {toolTip}
            </p>
          </div>
        )}
      </IconButton>
    </div>
  );
}

export default EditButton;
