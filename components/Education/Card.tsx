import React from "react";
import { BsCaretRightFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

interface Props {
  university: string;
  degree: string;
  duration: string;
  relevantCourseworks: string[];
  mark: string;
  link: string;
}

const Card: React.FC<Props> = ({ university, degree, duration, relevantCourseworks, mark, link }) => {
  return (
    <div className="w-full inline-flex gap-6 items-center bg-white px-[max(10px,3.5%)] py-8 drop-shadow-xl max-w-[1550px]">
      <div>
        <p className="text-2xl text-primary font-light mb-1">{degree}</p>
        <Link href={link} target='_blank' className="text-lg font-light text-gray-500">
          {university}
        </Link>
        <div className="text-primary font-light italic">{duration}</div>
        <div className="mt-3">
          <b className="text-lg font-normal text-gray-800">Relevant Courseworks:</b>
          <ul>
            {relevantCourseworks.map((coursework, index) => (
              <li
                key={index}
                className="text-lg font-light text-gray-500 flex align-text-top justify-start gap-1"
              >
                <BsCaretRightFill className="mr-2 text-xs flex-shrink-0 text-gray-500 mt-2" />
                <span className="text-base">{coursework}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link href={link} target='_blank'>
        <Image src={mark} alt="mark" width={0} height={0} className="hidden md:block min-w-[250px] lg:min-w-fit object-contain" />
      </Link>
    </div>
  );
};

export default Card;
