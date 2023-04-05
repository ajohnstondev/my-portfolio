import React from "react";
import Header from "@components/Atoms/Header";
import { CONFIG } from "@config";
import Image from "next/image";
import Link from "next/link";

const Certifications: React.FC = () => {
  return (
    <>
      <Header>Certifications</Header>
      <div
        className="w-full grid gap-8 px-[max(5%,10px)] py-10 max-w-[1800px]"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))"
        }}
      >
        {CONFIG.certifications.map((certification, index) => (
          <Link
            key={certification.title + '-' + index}
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            title={certification.title}
            className="w-full h-full"
          >
            <Image
              src={certification.image}
              alt="certification"
              width={500}
              height={500}
              className="rounded-sm shadow-md w-full h-auto"
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Certifications;
