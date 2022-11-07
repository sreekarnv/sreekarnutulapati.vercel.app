import type { NextPage } from 'next';
import classes from '@/scss/pages/about/about.module.scss';
import { motion, Variants } from 'framer-motion';
import Button from '@/components/ui/button';
import Link from 'next/link';

const about: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.4 } },
};

const aboutChild: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutPage: NextPage = ({}) => {
  return (
    <>
      <motion.div
        className={classes.page}
        variants={about}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={aboutChild}>Hello Again! 👋</motion.h1>
        <motion.p variants={aboutChild}>
          I&apos;m a full-stack web developer with a passion for creating
          beautiful and functional websites.
        </motion.p>
        <motion.p variants={aboutChild}>
          I&apos;ve always been interested in technology and how it can be used
          to make our lives easier. I like to learn new things and I&apos;m
          always up for a challenge.
        </motion.p>
        <motion.p variants={aboutChild}>
          At the height of the pandemic, I invested heavily in self-development
          and building my skills as a developer. The skills I&apos;ve learned
          have led me to a career in web development and have given me the tools
          required to build effective and efficient websites.
        </motion.p>
        <motion.p variants={aboutChild}>
          As of today, I&apos;m currently working as a frontend developer intern
          at CleverTap.
        </motion.p>
        <motion.div variants={aboutChild} className={classes.cta}>
          <Link href="/work" passHref>
            <Button variant="secondary-outline">My Work</Button>
          </Link>

          <Link href="/contact" passHref>
            <Button>Contact Me</Button>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutPage;
