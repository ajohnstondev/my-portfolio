import React from "react";
import { BsCaretRightFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  company: string;
  link: string;
  position: string;
  brief: string;
  description: string[];
  tools: string[];
  logo?: string;
  startDate: string;
  endDate: string;
  location?: string;
  type?: string; // full-time, part-time, internship
}

const Card: React.FC<CardProps> = ({
  company,
  position,
  link="",
  brief,
  description,
  logo,
  startDate,
  endDate,
  location,
  type,
  tools
}) => {
  return (
    <div className="bg-white relative px-[max(10px,3.5%)] py-8 drop-shadow-md max-w-[1550px]">
      <div className="flex justify-between items-center border-b-2 border-gray-400 pb-3 flex-wrap">
        <div className="flex items-center gap-1">
          <Link href={link} className="flex items-center gap-[max(10%,20px)]">
            {logo && (
              <div className="relative w-[60px] h-[60px]">
                <Image src={logo} width={50} height={50} alt="logo" className="w-full h-full object-contain" />
              </div>
            )}
            <div className="text-2xl text-primary font-light leading-[32px] whitespace-nowrap">{company}</div>
          </Link>
          {type && <div className="text-primary text-xl font-light">({type})</div>}
        </div>
        <div className="block ml-3">
          <div className="position text-lg text-[#5d4037]">{position}</div>
        </div>
      </div>

      <ul className="mt-3 text-lg font-light">
        <p>{brief}</p>
        <p className="mt-2 text-lg font-light text-gray-500">Some of my key contributions include:</p>
        {description.map((item, index) => (
          <li
            className="text-lg font-light text-gray-500 flex flex-row align-text-top justify-start gap-1"
            key={index}
          >
            <BsCaretRightFill className="mr-2 text-sm flex-shrink-0 text-gray-500 mt-2" />
            <span className="text-justify">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-3 text-lg font-light text-gray-500  block  align-text-top justify-start gap-1">
        <b className="text-lg font-medium">Tools Used:</b>{" "}
        <i> {tools.map((tool, index) => (index === tools.length - 1 ? tool : tool + ", "))}</i>
      </div>
      <div className="mt-3 text-lg font-extralight text-gray-500  block  align-text-top justify-start gap-1 float-right clear-left ml-auto">
        {`${startDate} - ${endDate} ${location && "|"} ${location}`}
      </div>
    </div>
  );
};

export default Card;
