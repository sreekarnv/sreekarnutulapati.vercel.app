import ProjectCard from '@/components/project-card';
import type { GetStaticProps, NextPage } from 'next';
import classes from '@/scss/pages/work/work.module.scss';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Project } from '@/types/project';
import Seo from '@/components/seo';
import useAccordion from '@/hooks/useAccordion';

interface WorkPageProps {
  projects: {
    frontend: Project[];
    fullStack: Project[];
    blockchain: Project[];
  };
}

const WorkPage: NextPage<WorkPageProps> = ({ projects }) => {
  const { accordions } = useAccordion({
    tabs: [
      {
        header: (
          <>
            <h1 className={classes.heading}>Full Stack Projects</h1>
          </>
        ),
        content: (
          <>
            <section className={classes.projectSection}>
              {projects.fullStack.map((project) => (
                <ProjectCard
                  gradient={project.color}
                  key={project.id}
                  project={project}
                />
              ))}
            </section>
          </>
        ),
      },
      {
        header: (
          <>
            <h1 className={classes.heading}>Blockchain Projects</h1>
          </>
        ),
        content: (
          <>
            <section className={classes.projectSection}>
              {projects.blockchain.map((project) => (
                <ProjectCard
                  gradient={project.color}
                  key={project.id}
                  project={project}
                />
              ))}
            </section>
          </>
        ),
      },
      {
        header: (
          <>
            <h1 className={classes.heading}>Frontend Projects</h1>
          </>
        ),
        content: (
          <>
            <section className={classes.projectSection}>
              {projects.frontend.map((project) => (
                <ProjectCard
                  gradient={project.color}
                  key={project.id}
                  project={project}
                />
              ))}
            </section>
          </>
        ),
      },
    ],
  });

  return (
    <>
      <Seo title="Work" />
      <div className={classes.page}>{accordions}</div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blockchainDir = fs.readdirSync(
    path.join('src/data/projects/blockchain')
  );

  const blockchain = blockchainDir.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join('src/data/projects/blockchain', filename))
      .toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    return {
      ...parsedMarkdown.data,
      slug: filename.replace('.md', ''),
    };
  });

  const frontendDir = fs.readdirSync(path.join('src/data/projects/frontend'));

  const frontend = frontendDir.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join('src/data/projects/frontend', filename))
      .toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    return {
      ...parsedMarkdown.data,
      slug: filename.replace('.md', ''),
    };
  });

  const fullStackDir = fs.readdirSync(
    path.join('src/data/projects/full-stack')
  );

  const fullStack = fullStackDir.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join('src/data/projects/full-stack', filename))
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
        blockchain,
        frontend,
        fullStack,
      },
    },
  };
};

export default WorkPage;
