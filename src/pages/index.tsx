import Seo from '@/components/seo';
import Button from '@/components/ui/button';
import classes from '@/scss/pages/home/home.module.scss';
import { motion, Variants } from 'framer-motion';
import type { NextPage } from 'next';
import Link from 'next/link';

const homeContent: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.4 } },
};

const homeContentChild: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HomePage: NextPage = () => {
  return (
    <>
      <Seo title="Home" />

      <div className={classes.page}>
        <section>
          <motion.div variants={homeContent} initial="hidden" animate="show">
            <motion.h4 variants={homeContentChild} className={classes.wave}>
              Hi there 👋,
            </motion.h4>
            <motion.h3 variants={homeContentChild} className={classes.name}>
              I&apos;m a Full Stack Web & App Developer
            </motion.h3>
            <motion.p
              variants={homeContentChild}
              className={classes.description}
            >
              Currently a student at Birla Institute of Technology and Science,
              Pilani. I am a self taught developer and I develop exceptional
              websites and web applications that provide intuitive,
              pixel-perfect user interfaces with efficient and modern backends.
            </motion.p>

            <motion.div variants={homeContentChild} className={classes.action}>
              <Link href="/work" passHref>
                <Button size="large" variant="primary-outline">
                  My Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
