import ProjectCard from '@/components/project-card';
import type { GetStaticProps, NextPage } from 'next';
import classes from '@/scss/pages/work/work.module.scss';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Project } from '@/types/project';
import React from 'react';
import Seo from '@/components/shared/seo';

interface WorkPageProps {
  projects: {
    personal: Project[];
    course: Project[];
    openSource: Project[];
  };
}

const WorkPage: NextPage<WorkPageProps> = ({ projects }) => {
  return (
    <>
      <Seo title="Work" />
      <div className={classes.page}>
        <section className={classes.projectSection}>
          <h1 className={classes.heading}>Personal Projects</h1>

          {projects.personal.map((project) => (
            <ProjectCard
              gradient={project.color}
              key={project.id}
              project={project}
            />
          ))}
        </section>

        <section className={classes.projectSection}>
          <h1 className={classes.heading}>Course Projects</h1>

          {projects.course.map((project) => (
            <ProjectCard
              gradient={project.color}
              key={project.id}
              project={project}
            />
          ))}
        </section>

        <section className={classes.projectSection}>
          <h1 className={classes.heading}>Open Source Projects</h1>

          {projects.openSource.map((project) => (
            <ProjectCard
              gradient={project.color}
              key={project.id}
              project={project}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const personalProjects = fs.readdirSync(
    path.join('src/data/projects/personal')
  );
  const courseProjects = fs.readdirSync(path.join('src/data/projects/course'));
  const openSourceProjects = fs.readdirSync(
    path.join('src/data/projects/open-source')
  );

  const personalProjectsData = personalProjects.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join('src/data/projects/personal', filename))
      .toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    return {
      ...parsedMarkdown.data,
      slug: filename.replace('.md', ''),
    };
  });

  const courseProjectsData = courseProjects.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join('src/data/projects/course', filename))
      .toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    return {
      ...parsedMarkdown.data,
      slug: filename.replace('.md', ''),
    };
  });

  const openSourceProjectsData = openSourceProjects.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join('src/data/projects/open-source', filename))
      .toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    return {
      ...parsedMarkdown.data,
      slug: filename.replace('.md', ''),
    };
  });

  return {
    props: {
      projects: {
        personal: personalProjectsData,
        course: courseProjectsData,
        openSource: openSourceProjectsData,
      },
    },
  };
};

export default WorkPage;
