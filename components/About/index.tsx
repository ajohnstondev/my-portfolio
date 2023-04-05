import React from "react";
import Image from "next/image";
import { MdEmail, MdPhone } from "react-icons/md";
import Header from "@components/Atoms/Header";
import { CONFIG } from "@config";

const About: React.FC = () => {
  return (
    <>
      <Header>About</Header>
      <div className="w-full h-full flex justify-between px-[max(5%,10px)] gap-[max(10%,10px)] mx-auto py-12">
        <div>
          <h3 className="text-[18px] font-normal leading-[32px]">
            Hi, I&apos;m <b>{CONFIG.home.name}</b>,
          </h3>
          {CONFIG.about.map((item, index) => (
            <p key={index} className="text-[18px] font-light leading-7 mt-2 text-justify">
              {item}
            </p>
          ))}
          <div className="mt-2">
            <p className="font-bold">Personal Info:</p>
            <ul className="text-gray-400">
              <li className="flex items-center gap-3">
                <MdEmail />
                Email Address:
                <span className="text-gray-500">{CONFIG.contacts.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone />
                Phone Number:
                <span className="text-gray-500">{CONFIG.contacts.phone}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block w-full min-w-[400px] h-full mb-6">
          <div className="relative rounded-lg w-full max-w-[400px] mt-5 mx-0">
            <Image
              src={CONFIG.home.portrait}
              alt="Picture of the author"
              width={0}
              height={0}
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute bg-secondary p-5 aspect-square rounded-full -bottom-12 -left-[min(50px,10%)]">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <h3 className="text-4xl font-semibold">{CONFIG.home.year}+ Years</h3>
                <h5 className="text-2xl">of experience</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
