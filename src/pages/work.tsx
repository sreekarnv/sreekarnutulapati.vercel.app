import ProjectCard from '@/components/project-card';
import Seo from '@/components/seo';
import Tab from '@/components/ui/tabs/Tab';
import Tabs from '@/components/ui/tabs/Tabs';
import useTab from '@/hooks/useTab';
import classes from '@/scss/pages/work/work.module.scss';
import { Project } from '@/types/project';
import { motion, Variants } from 'framer-motion';
import fs from 'fs';
import Fuse from 'fuse.js';
import matter from 'gray-matter';
import type { GetStaticProps, NextPage } from 'next';
import path from 'path';
import { getPlaiceholder } from 'plaiceholder';
import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import slugify from 'slugify';

interface WorkPageProps {
  projects: Project[];
}

const projectsListVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const projectsTabVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const projectItemVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
        <motion.div
          variants={projectsTabVariant}
          initial="hidden"
          animate="show"
        >
          <Tabs className={classes.tabs}>
            {['All', 'Frontend', 'Full Stack', 'Blockchain'].map((t, i) => (
              <Tab
                isActive={activeTab === i}
                label={t}
                key={t}
                onClick={() => {
                  if (t === 'All') {
                    setActiveProjects(projects);
                    handleTabChange(0);
                    return;
                  }

                  const filteredProjects = fuseRef.current
                    ?.search(slugify(t))
                    .map((p) => p.item) as Project[];

                  setActiveProjects(filteredProjects);
                  handleTabChange(i);
                }}
              />
            ))}
          </Tabs>
        </motion.div>

        <motion.section
          initial="hidden"
          animate="show"
          variants={projectsListVariant}
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 450: 1, 750: 2, 1200: 3, 1500: 4 }}
          >
            <Masonry gutter="2rem">
              {activeProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={projectItemVariant}
                >
                  <ProjectCard project={project} key={project.id} />
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </motion.section>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projectsDir = fs.readdirSync(path.join('src/data/projects'));

  const projects = projectsDir.map(async (filename) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join('src/data/projects/', filename))
      .toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    const { data } = parsedMarkdown;

    const image = await getPlaiceholder(data.coverImage);

    return {
      ...parsedMarkdown.data,
      image,
      slug: filename.replace('.md', ''),
    };
  });

  const projectsData = await Promise.all(projects);

  return {
    props: {
      projects: projectsData,
    },
  };
};

export default WorkPage;
