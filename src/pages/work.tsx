import ProjectCard from '@/components/project-card';
import type { GetStaticProps, NextPage } from 'next';
import classes from '@/scss/pages/work/work.module.scss';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Project } from '@/types/project';
import Seo from '@/components/seo';
import Tab from '@/components/ui/tabs/Tab';
import Tabs from '@/components/ui/tabs/Tabs';
import useTab from '@/hooks/useTab';
import Fuse from 'fuse.js';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import React from 'react';
import slugify from 'slugify';

interface WorkPageProps {
  projects: Project[];
}

const WorkPage: NextPage<WorkPageProps> = ({ projects }) => {
  const { activeTab, handleTabChange } = useTab();
  const [activeProjects, setActiveProjects] =
    React.useState<Project[]>(projects);

  const fuseRef = React.useRef<Fuse<Project>>();

  React.useEffect(() => {
    fuseRef.current = new Fuse(projects, {
      keys: ['domains'],
      includeScore: true,
    });
  }, [projects]);

  return (
    <>
      <Seo title="Work" />
      <div className={classes.page}>
        <Tabs className={classes.tabs}>
          {['All', 'Frontend', 'Full Stack', 'Blockchain'].map((t, i) => (
            <Tab
              isActive={activeTab === i}
              label={t}
              key={t}
              onClick={() => {
                if (t === 'All') return setActiveProjects(projects);

                const filteredProjects = fuseRef.current
                  ?.search(slugify(t))
                  .map((p) => p.item) as Project[];

                setActiveProjects(filteredProjects);
                handleTabChange(i);
              }}
            />
          ))}
        </Tabs>

        <section>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 450: 1, 750: 2, 1200: 3, 1500: 4 }}
          >
            <Masonry gutter="2rem">
              {activeProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </section>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projectsDir = fs.readdirSync(path.join('src/data/projects'));

  const projects = projectsDir.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join('src/data/projects/', filename))
      .toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    return {
      ...parsedMarkdown.data,
      slug: filename.replace('.md', ''),
    };
  });

  return {
    props: {
      projects,
    },
  };
};

export default WorkPage;
