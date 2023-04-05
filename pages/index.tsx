import React from "react";
import Head from "next/head";
import Sidebar from "@components/Layout/Sidebar";
import HomeSection from "@components/Home";
import About from "@components/About";
import Experience from "@components/Experience";
import Projects from "@components/Projects";
import Skills from "@components/Skills";
import Education from "@components/Education";
import Certifications from "@components/Certifications";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import MobileNav from "@components/Layout/MobileNav";
// import ProfileViews from "@components/Atoms/ProfileViews";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Andrew Johnston</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:url" content="https://www.ajohnston.info" />
        <meta property="og:site_name" content="Andrew Johnston - Full-stack Developer" />
        <meta property="og:title" content="Web based Software Developer with 10years Experience" />
        <meta property="og:description" content="Versatile Full-stack Web Developer with 8+ years of experience designing, developing, and managing complex e-commerce sites. Specializes in Javascript frameworks such as React, Angular(2+), Vue and Node/Typescript, responsive design by using Bootstrap, Back-end REST/Graphql API development using PHP, C# and Python." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/images/ceo.png" />
        <meta property="og:image:type" content="image/png" />
      </Head>
      <main className="w-full min-h-screen block laptop:pl-[190px]">
        <MobileNav />
        <Sidebar />
        <section id="home" className="w-full h-screen flex flex-col justify-center items-center bg-secondary scroll-mt-16 lg:scroll-mt-0">
          <HomeSection />
        </section>
        <section id="about" className="w-full scroll-mt-16 lg:scroll-mt-0">
          <About />
        </section>
        <section id="experience" className="w-full scroll-mt-16 lg:scroll-mt-0">
          <Experience />
        </section>
        <section id="education" className="w-full scroll-mt-16 lg:scroll-mt-0">
          <Education />
        </section>
        <section id="projects" className="w-full scroll-mt-16 lg:scroll-mt-0">
          <Projects />
        </section>
        <section id="skills" className="w-full scroll-mt-16 lg:scroll-mt-0">
          <Skills />
        </section>
        <section id="certifications" className="w-full scroll-mt-16 lg:scroll-mt-0">
          <Certifications />
        </section>
        <section id="contact" className="w-full scroll-mt-16 lg:scroll-mt-0">
          <Contact />
        </section>
        <section id="footer" className="w-full scroll-mt-16 lg:scroll-mt-0">
          <Footer />
        </section>
        {/* <ProfileViews views={100} /> */}
      </main>
    </React.Fragment>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {}
//   };
// };
