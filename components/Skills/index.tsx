import React from "react";
import Header from "@components/Atoms/Header";
import Card from "./Card";
import { CONFIG } from "@config";

const Skills: React.FC = () => {
  return (
    <>
      <Header>Skills</Header>
      <div className="w-full grid gap-8 px-[max(5%,10px)] py-10 max-w-[1800px]">
        {CONFIG.skills.map((skill) => (
          <Card key={skill.title} title={skill.title} skills={skill.skills} />
        ))}
      </div>
    </>
  );
};

export default Skills;
