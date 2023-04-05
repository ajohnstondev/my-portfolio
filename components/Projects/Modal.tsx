// "use client";
import Image from "next/image";
import React from "react";
import { GrClose } from "react-icons/gr";

interface CardProps {
  image: string;
  title: string;
  handleClose: () => void;
}

const Modal: React.FC<CardProps> = ({ image, title, handleClose }) => {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-screen h-screen bg-black opacity-40"
        onClick={handleClose}
      />
      <div className="flex items-center min-h-screen px-4 py-8">
      {/* <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"> */}
        {/* <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg"> */}
        <div className="relative w-[90vw] h-auto md:w-[75vw] md:h-auto lg:w-[60vw] lg:h-auto mx-auto">
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
            priority
          />
        </div>
        {/* </div> */}
      </div>

      <div
        className="fixed top-4 right-4 w-8 h-8 bg-white rounded-full flex justify-center items-center cursor-pointer"
        onClick={handleClose}
      >
        <GrClose className="text-xl text-gray-800" />
      </div>
    </div>
  );
};

export default Modal;
