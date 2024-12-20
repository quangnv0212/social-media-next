"use client";
import Header from "@/components/partials/header";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/store";
import { motion } from "framer-motion";
import React from "react";
import { useAppStore } from "./providers/app-provider";
const DashBoardLayoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { collapsed } = useSidebar();
  const { isAuth, user } = useAppStore();
  console.log(isAuth);
  console.log(user);

  return (
    <>
      {isAuth && <Header />}
      <div
        className={cn("content-wrapper transition-all duration-150 ", {
          "ltr:xl:ml-[300px] rtl:xl:mr-[300px]": !collapsed,
          "ltr:xl:ml-[72px] rtl:xl:mr-[72px]": collapsed,
        })}
      >
        <div className={cn(" layout-padding px-6 pt-6  page-min-height ")}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayoutProvider;

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
            y: 50,
          },
          pageAnimate: {
            opacity: 1,
            y: 0,
          },
          pageExit: {
            opacity: 0,
            y: -50,
          },
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <main>{children}</main>
      </motion.div>
    </>
  );
};
