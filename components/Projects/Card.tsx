// "use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { SKILL_BADGE_MAP } from "@config/stacks";

interface CardProps {
  image: string;
  title: string;
  brief?: string;
  scope: string;
  role: string;
  timeline: string;
  link: string;
  challenge: string;
  stacks?: string[];
  git?: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, brief, scope, role, timeline, link, challenge, stacks, git, onClick }) => {
  const getSkillBadge = (skill: string) => {
    const skillBadge = SKILL_BADGE_MAP[skill.split(" ")[0].toLocaleLowerCase() || 'undefined'];
    return `https://img.shields.io/badge/${encodeURIComponent(skill)}-${skillBadge?.color}?style=for-the-badge&logo=${skillBadge?.logo}&logoColor=white`
  }

  return (
    <div className="flex flex-col md:flex-row lg:flex-col h-auto bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out relative">
      <div
        className="w-full min-h-[15rem] md:h-full md:w-1/3 lg:w-full bg-cover bg-no-repeat bg-left-top rounded-t-lg md:rounded-bl-lg md:rounded-tr-none lg:rounded-tr-lg lg:rounded-bl-none cursor-pointer"
        style={{ backgroundImage: `url("${image}")` }}
        onClick={onClick}
      />
      <div className="px-5 w-full md:w-2/3 lg:w-full py-3">
        <div className="flex items-center justify-between border-b-2 pb-2 mb-2 border-gray-200 mt-4">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex gap-5 items-center"
            title="Visit the project"
          >
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            <div className="text-2xl font-bold text-gray-800 mr-4 p-2 group-hover:bg-primary group-hover:rounded-full group-hover:shadow-lg group-hover:transition duration-500 ease-in-out">
              <BiLinkExternal />
            </div>
          </Link>
          {git && (
            <Link href={git} target="_blank" className="p-2 hover:bg-primary hover:rounded-full hover:shadow">
              <FaGithub className="h-5 w-5" />
            </Link>
          )}
        </div>
        <p>{brief}</p>
        <p>My Role: {role}</p>
        <p>Timeline: {timeline}</p>
        <p>Scope:</p>
        <span className="pl-2 text-gray-500 box-decoration-clone">{scope}</span>
        {challenge && (
          <>
            <p className="mt-2">Challenge:</p>
            <span className="pl-2 text-gray-500 box-decoration-clone">{challenge}</span>
          </>
        )}
        <div className="flex gap-1 flex-wrap px-2 lg:px-5 mt-5">
          {stacks?.map((stack, index) => (
            <Image
              src={getSkillBadge(stack)}
              key={index}
              alt={stack}
              width={0}
              height={0}
              className="w-auto h-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
