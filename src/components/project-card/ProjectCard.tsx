import React from 'react';
import clsx from 'clsx';
import classes from '@/scss/components/project-card/project-card.module.scss';
import Image from 'next/image';
import MainNavbarLink from '../main-navbar/MainNavbarLink';
import { BsGithub, BsPlay } from 'react-icons/bs';
import { Project } from '@/types/project';
import { Tooltip } from '../shared/tooltip';

const gradients = {
  bluePink: classes.bluePink,
  greenBlue: classes.greenBlue,
  orangeGreen: classes.orangeGreen,
  yellowPurple: classes.yellowPurple,
};

interface ProjectCardProps {
  project: Project;
  gradient?: keyof typeof gradients;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  gradient = 'greenBlue',
  project,
}) => {
  return (
    <>
      <div className={clsx(classes.projectCard, gradients[gradient])}>
        <div className={clsx(classes.projectCardStack)}>
          {project.techStack.map((project) => (
            <div key={project.link}>
              <Tooltip text={project.alt}>
                <figure>
                  <Image
                    style={{ borderRadius: '50%' }}
                    src={project.link}
                    alt={project.alt}
                    loading="lazy"
                    height={30}
                    width={30}
                  />
                </figure>
              </Tooltip>
            </div>
          ))}
        </div>
        <figure className={classes.projectCardMedia}>
          <Image
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            height={1080}
            width={1920}
          />
        </figure>
        <h2 className={classes.projectCardTitle}>{project.title}</h2>
        <p className={classes.projectCardDescription}>{project.description}</p>
        <ul className={classes.projectCardCta}>
          <MainNavbarLink
            icon={<BsGithub size={20} />}
            text="Github"
            href={project.links.github}
          />
          {project.links.preview && (
            <MainNavbarLink
              target="_blank"
              icon={<BsPlay size={20} />}
              text="Preview"
              href={project.links.preview}
            />
          )}
        </ul>
      </div>
    </>
  );
};

export default ProjectCard;
