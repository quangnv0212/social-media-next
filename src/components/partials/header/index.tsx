"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { useSidebar, useThemeStore } from "@/store/store";
import React from "react";
import FullScreen from "./full-screen";
import Inbox from "./inbox";
import Language from "./language";
import ClassicHeader from "./layout/classic-header";
import MobileMenuHandler from "./mobile-menu-handler";
import NotificationMessage from "./notification-message";
import ProfileInfo from "./profile-info";
import ThemeButton from "./theme-button";

const NavTools = ({
  isDesktop,
  sidebarType,
}: {
  isDesktop: boolean;
  sidebarType: string;
}) => {
  return (
    <div className="nav-tools flex items-center  gap-2">
      {isDesktop && <Language />}
      {isDesktop && <FullScreen />}
      <ThemeButton />
      <Inbox />
      <NotificationMessage />
      <div className="ltr:pl-2 rtl:pr-2">
        <ProfileInfo />
      </div>
      {!isDesktop && sidebarType !== "module" && <MobileMenuHandler />}
    </div>
  );
};
const Header = () => {
  const { collapsed, sidebarType, setSidebarType } = useSidebar();
  const { layout, navbarType } = useThemeStore();
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isMobile = useMediaQuery("(min-width: 768px)");
  React.useEffect(() => {
    if (!isDesktop && layout === "horizontal") {
      setSidebarType("classic");
    }
  }, [isDesktop]);

  return (
    <ClassicHeader
      className={cn("", {
        "ltr:xl:ml-[300px] rtl:xl:mr-[300px]": !collapsed,
        "ltr:xl:ml-[72px] rtl:xl:mr-[72px]": collapsed,

        "sticky top-0": navbarType === "sticky",
      })}
    >
      <div className="w-full bg-card/90 backdrop-blur-lg md:px-6 px-[15px] py-3 border-b">
        <div className="flex justify-between items-center h-full">
          <div className="">Menu</div>
          <NavTools isDesktop={isDesktop} sidebarType={sidebarType} />
        </div>
      </div>
    </ClassicHeader>
  );
};

export default Header;
