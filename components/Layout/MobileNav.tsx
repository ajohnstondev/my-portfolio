// "use client";
import { CONFIG } from "@config";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

const MobileNav: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

  const handleSidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-16 bg-white text-gray-600 z-10 laptop:hidden drop-shadow-md">
        <button
          onClick={handleSidebarOpen}
          className="flex flex-row justify-center items-center w-10 h-10 rounded-full bg-gray-100 active:bg-gray-200 active:shadow-md active:scale-95 transition-all duration-200 ease-in-out absolute top-1/2 left-5 transform  -translate-y-1/2"
        >
          <RxHamburgerMenu className="text-4xl text-primary" />
        </button>
        <div className="flex flex-row justify-center items-center w-full h-full px-4">
          <div
            className="ml-4 text-2xl font-medium cursor-pointer text-primary text-center"
            onClick={() => {
              window.location.href = "#home";
            }}
          >
            {CONFIG.home.name}
          </div>
        </div>
      </div>
      <Sidebar isMobile isHidden={!isSidebarOpen} onClose={handleSidebarClose} />
    </>
  );
};

export default MobileNav;
