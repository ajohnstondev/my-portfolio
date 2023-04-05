// "use client";
import { CONFIG } from "@config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdTrendingUp,
  MdLibraryBooks,
  MdAssessment,
  MdSchool,
  MdAssignmentTurnedIn,
  MdDownload,
  MdEmail,
  MdPerson,
  MdClose
} from "react-icons/md";

const NAV_LINKS = [
  {
    label: "About",
    icon: <MdPerson />,
    path: "#about"
  },
  {
    label: "Experience",
    icon: <MdTrendingUp />,
    path: "#experience"
  },
  {
    label: "Education",
    icon: <MdSchool />,
    path: "#education"
  },
  {
    label: "Projects",
    icon: <MdLibraryBooks />,
    path: "#projects"
  },
  {
    label: "Skills",
    icon: <MdAssessment />,
    path: "#skills"
  },
  {
    label: "Certifications",
    icon: <MdAssignmentTurnedIn />,
    path: "#certifications"
  },
  {
    label: "Contact",
    icon: <MdEmail />,
    path: "#contact"
  }
];

const Sidebar: React.FC<{ isMobile?: boolean; isHidden?: boolean; onClose?: () => void }> = ({
  isMobile,
  isHidden,
  onClose
}) => {
  const [activeNav, setActiveNav] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-200px 0px -50% 0px" }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`laptop:block ${!isMobile && "hidden"} ${isHidden && "hidden"} 
      flex-col justify-start h-screen py-8 text-gray-700 bg-white border-r fixed left-0 top-0 w-[190px]  max-w-[190px] drop-shadow-md z-10
      transition-all duration-800 ease-in-out
      `}
    >
      {isMobile && (
        <div
          className="flex justify-end items-center w-full h-12 px-4 absolute top-0 r-0 text-primary"
          onClick={onClose}
        >
          <MdClose className="text-3xl" />
        </div>
      )}
      {!isMobile && (
        <Link
          href="#"
          className="h-[150px] min-h-[150px] w-[150px] rounded-full bg-secondary mx-auto max-h-[150px] flex justify-center items-center p-2 active:shadow-md active:scale-95 transition-all duration-200 ease-in-out border-b-2 
      "
        >
          <Image
            src={CONFIG.home.avatar}
            alt="profile"
            width={0}
            height={0}
            loading="eager"
            className="rounded-full w-full h-full object-cover"
          />
        </Link>
      )}
      <nav className="flex flex-col justify-start items-start w-full h-full gap-2 mt-4">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.path}
            onClick={() => isMobile && onClose && onClose()}
            className={`group flex items-center justify-start w-full gap-2 h-12 px-4 text-sm font-light text-gray-700 bg-white hover:font-medium hover:border-l-[3px] hover:border-primary hover:bg-slate-50 ${
              activeNav === link.path && "font-medium border-l-[3px] border-primary bg-slate-50"
            }`}
          >
            <div className={`group-hover:text-primary text-xl nav-icon ${activeNav === link.path && "text-primary"}`}>{link.icon}</div>
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
      <Link
        className="absolute flex items-center justify-center bottom-5 left-1/2 rounded-3xl -translate-x-1/2 w-[90%] h-10 bg-black text-white gap-2"
        href={CONFIG.resume}
        target='_blank'
      >
        <MdDownload />
        <div className="text-l font-medium">Resume</div>
      </Link>
    </div>
  );
};

export default Sidebar;
