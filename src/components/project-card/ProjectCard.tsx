import React from 'react';
import clsx from 'clsx';
import classes from '@/scss/components/project-card/project-card.module.scss';
import Image from 'next/image';
import { BsGithub, BsPlay } from 'react-icons/bs';
import { Project } from '@/types/project';
import { Tooltip } from '@/components/ui/tooltip';
import Link from '../ui/link';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <>
      <div className={clsx(classes.root)}>
        <figure className={classes.media}>
          <Image
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            height={1080}
            width={1920}
          />
        </figure>
        <div className={clsx(classes.techStack)}>
          {project.techStack.map((project) => (
            <Tooltip text={project.alt} key={project.link}>
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
          ))}
        </div>
        <h2 className={classes.title}>{project.title}</h2>
        <p className={classes.description}>{project.description}</p>
        <ul className={classes.cta}>
          <Link
            target="_blank"
            icon={<BsGithub size={20} />}
            text="Github"
            href={project.links.github}
          />
          {project.links.preview && (
            <Link
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
