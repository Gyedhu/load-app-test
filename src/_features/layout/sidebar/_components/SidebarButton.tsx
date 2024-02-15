import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { permissionConfigs } from "permissionConfigs";
import { type ReactNode } from "react";

interface SidebarButtons {
  children: ReactNode;
  isExpanded: boolean;
  icon: ReactNode;
  path: string;
}
function SidebarButton(props: SidebarButtons) {
  const role = "STAFF";

  const { children, isExpanded, icon, path } = props;

  const router = useRouter();

  const pathname = router.pathname;

  const isActive = path === pathname;

  const userPermission = permissionConfigs[role];
  if (userPermission) {
    const pagePermission = userPermission.allowedPages[path];
    if (pagePermission) {
      if (pagePermission.view) {
        return (
          <Link href={path}>
            <button
              className={
                clsx(
                  `btn btn-primary flex items-center`,
                  !isActive ? `btn-outline border-0` : ``,
                  isExpanded
                    ? `w-[175px] justify-start`
                    : `w-[45px]  max-h-[45px] border-none`
                )
              }
            >
              <i>{icon}</i>
              {isExpanded && <p className="text-md">{children}</p>}
            </button>
          </Link>
        );
      }
    }
  } else {
    return null;
  }
}

export default SidebarButton;
