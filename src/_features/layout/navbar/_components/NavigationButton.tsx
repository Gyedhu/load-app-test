import { type ReactNode } from "react";

interface NavigationButtonPage {
  children: ReactNode;
  isActive: boolean;
}
export function NavigationButton(props: NavigationButtonPage) {
  const { children, isActive } = props;

  return (
    <>
      <button
        className={`btn btn-active ${isActive ? "bg-primary text-white hover:bg-primary" : "btn btn-active border-0 shadow-[0px]"}  `}
      >
        {children}
      </button>
    </>
  );
}
