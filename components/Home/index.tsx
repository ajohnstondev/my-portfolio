import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CONFIG } from "@config";
import TypewriterComponent from "./Typewriter";

import { BsGithub, BsLinkedin } from "react-icons/bs";

const SOCIALS = [
  {
    label: "Github",
    icon: <BsGithub />,
    link: CONFIG.contacts.github
  },
  {
    label: "LinkedIn",
    icon: <BsLinkedin />,
    link: CONFIG.contacts.linkedin
  }
];

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center md:max-w-xl text-center  px-3 mx-auto">
      <div className="flex items-center justify-center flex-col gap-4">
        <Image
          src={CONFIG.home.avatar}
          alt="Picture of the author"
          width={0}
          height={0}
          loading="eager"
          className="rounded-full min-h-[150px] min-w-[150px] object-cover"
        />
        <h3 className="text-xl font-bold text-white">Hi, I&apos;m {CONFIG.home.name}</h3>
        <div className="text-4xl font-semibold text-white h-9">
          <TypewriterComponent strings={["Web Developer", "Software Engineer", "Freelancer"]} />
        </div>
        <h5 className="text-lg font-medium text-white">
          {CONFIG.home.description}, over {CONFIG.home.year} years of professional experience.
        </h5>
        <div className="socials flex items-center justify-center gap-4">
          {SOCIALS.map((social) => (
            <Link
              key={social.label}
              href={`https://${social.link}`}
              title={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white transition-colors duration-200 "
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <a
          href={CONFIG.resume}
          className="bg-white flex items-center justify-center text-primary font-semibold py-2 px-5 rounded-full transition-colors duration-200 hover:bg-secondary hover:text-white hover:border h-11 "
          download
        >
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
