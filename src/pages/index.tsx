import type { NextPage } from 'next';
import Seo from '@/components/shared/seo';
import classes from '@/scss/pages/home/home.module.scss';
import Button from '@/components/shared/button';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <>
      <Seo title="Home" />

      <div className={classes.page}>
        <section>
          <div>
            <h4 className={classes.wave}>Hi there 👋,</h4>
            <h3 className={classes.name}>
              I&apos;m a Full Stack Web & App Developer
            </h3>
            <p className={classes.description}>
              Currently a student at Birla Institute of Technology and Science,
              Pilani. I am a self taught developer and I develop exceptional
              websites and web applications that provide intuitive,
              pixel-perfect user interfaces with efficient and modern backends.
            </p>

            <div className={classes.action}>
              <Link href="/work" passHref>
                <Button size="large" variant="primary-outline">
                  My Work
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
