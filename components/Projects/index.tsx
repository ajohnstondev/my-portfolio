import React from "react";
import Header from "@components/Atoms/Header";
import { CONFIG } from "@config";

import Card from "./Card";
import Modal from "./Modal";

type ModalType = {
  image: string;
  title: string;
}

const Projects: React.FC = () => {
  const [showModal, setShowModal] = React.useState<ModalType | null>(null);

  return (
    <>
      <Header>Projects</Header>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-[max(5%,10px)] py-10 md:py-12 max-w-[1800px]">
        {CONFIG.projects.map((project, index) => (
          <Card
            key={project.title + '-' + index}
            image={project.image}
            title={project.title}
            brief={project.brief}
            scope={project.scope}
            link={project.link}
            stacks={project.stacks}
            role={project.role}
            timeline={project.timeline}
            challenge={project.challenge}
            git={project.git}
            onClick={() => {
              setShowModal(project);
              document.body.style['overflowY'] = 'hidden';
            }}
          />
        ))}
      </div>
      {showModal && (
        <Modal
          image={showModal.image}
          title={showModal.title}
          handleClose={() => {
            setShowModal(null);
            document.body.style['overflowY'] = 'auto';
          }}
        />
      )}
    </>
  );
};

export default Projects;
