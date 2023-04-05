import React from "react";
import Header from "@components/Atoms/Header";
import { CONFIG } from "@config";
import Card from "./Card";

const Education: React.FC = () => {
  return (
    <>
      <Header>Education</Header>
      <div className="relative w-full flex flex-col gap-8 mx-auto px-[max(5%,10px)] py-10 md:py-12">
        {CONFIG.education.map((education, index) => (
          <Card key={index} {...education} />
        ))}
      </div>
    </>
  );
};

export default Education;
