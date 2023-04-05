import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  skills: string[];
}

const Card: React.FC<Props> = ({ title, skills }) => {
  return (
    <div className="bg-white w-full block min-h-[300px]">
      <div className="h-[92px] flex items-center justify-start pl-5 md:pl-10 border-b-[1px] border-gray-400">
        <h3 className="text-4xl font-light">{title}</h3>
      </div>
      <div className="flex gap-8 lg:gap-16 items-center justify-start min-h-[208px] p-5 md:p-10 flex-wrap">
        {skills.map((skill, index) => (
          <Image src={skill} key={index} alt='skills' width={0} height={0} className="w-auto h-20" />
        ))}
      </div>
    </div>
  );
};

export default Card;
