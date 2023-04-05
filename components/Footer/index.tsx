import React from "react";
import { CONFIG } from "@config";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-24 bg-gray-900 text-white md:bg-transparent">
      <p className="text-sm font-normal">
        <strong>{CONFIG.home.name}</strong> © {new Date().getFullYear()} - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
