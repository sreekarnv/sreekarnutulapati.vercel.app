import React from 'react';
import clsx from 'clsx';
import classes from '@/scss/components/project-card/project-card.module.scss';
import Image from 'next/image';
import MainNavbarLink from '../main-navbar/MainNavbarLink';
import { BsGithub, BsPlay } from 'react-icons/bs';
import { Project } from '@/types/project';

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
        <div className={classes.projectCardContent}>
          <div />
          <div>
            <h2 className={classes.projectCardContentTitle}>{project.title}</h2>
            <p className={classes.projectCardContentDescription}>
              {project.description}
            </p>
          </div>
          <ul className={classes.projectCardContentCta}>
            <MainNavbarLink
              icon={<BsGithub size={20} />}
              text="Github"
              href={project.links.github}
            />
            {project.links.preview && (
              <MainNavbarLink
                icon={<BsPlay size={20} />}
                text="Preview"
                href={project.links.preview}
              />
            )}
          </ul>
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
      </div>
    </>
  );
};

export default ProjectCard;
