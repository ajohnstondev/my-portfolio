"use client";
import React from "react";
import TypewriterComponent from "typewriter-effect";

export default function Typewriter({ strings }: { strings: string[] }) {
  return (
    <TypewriterComponent
      options={{
        strings,
        autoStart: true,
        loop: true,
      }}
    />
  );
}
