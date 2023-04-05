"use client";
import React from "react";
import { GrClose } from "react-icons/gr";

const ProfileViews: React.FC<{ views: number }> = ({ views }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("profileViews", "false");
  };

  React.useEffect(() => {
    const isHidden = sessionStorage.getItem("profileViews");
    if (isHidden !== "false") {
      setIsVisible(true);
    }
  }, []);

  return (
    <div
      className={`flex-col drop-shadow-lg p-4 rounded-lg justify-center font-light items-center fixed bottom-8 right-8 bg-primary h-[60px] w-[140px] ${
        isVisible ? "flex" : "hidden"
      }`}
    >
      <h6>
        <span className="text-white">Profile Views</span>
      </h6>
      <p className="text-white">{views}</p>
      <div
        className="absolute -top-3 -right-3 w-6 h-6 bg-white rounded-full flex justify-center items-center cursor-pointer"
        onClick={handleClose}
      >
        <GrClose className="text-md text-gray-800" />
      </div>
    </div>
  );
};

export default ProfileViews;
