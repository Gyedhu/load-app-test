import React, { ReactNode } from "react";
interface IconButtons {
  children: ReactNode;
}
function IconButton(props: IconButtons) {
  const { children } = props;
  return (
    <>
      <button className="btn btn-square   btn-primary hover:btn-primary">
        {children}
      </button>
    </>
  );
}

export default IconButton;
