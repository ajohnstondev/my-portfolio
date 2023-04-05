import React from "react";
import Header from "@components/Atoms/Header";
import { CONFIG } from "@config";
import Card from "./Card";

const Experience: React.FC = () => {
  return (
    <>
      <Header>Experience</Header>
      <div className="w-full flex flex-col gap-8 px-[max(5%,10px)] py-10 md:py-12">
        {CONFIG.experience.map((item, index) => (
          <Card
            key={index}
            {...item}
          />
        ))}
      </div>
    </>
  );
};

export default Experience;
