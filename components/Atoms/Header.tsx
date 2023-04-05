import React from "react";

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h2 className="text-[42px] font-extralight text-white w-full max-h-[103px] h-[103px] px-3 bg-primary flex justify-start items-center">
      {children}
    </h2>
  );
};

export default Header;
