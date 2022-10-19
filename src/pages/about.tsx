import type { NextPage } from 'next';
import classes from '@/scss/pages/about/about.module.scss';
import Link from 'next/link';

const AboutPage: NextPage = () => {
  return (
    <>
      <h1 className={classes.name}>Sreekar Venkata Nutulapati</h1>
      <div className={classes.page}>
        <h1 className={classes.heading}>About Me</h1>

        <div className={classes.content}>
          <section className={classes.section}>
            <h2 className={classes.subHeading}>Education</h2>
            <p className={classes.contentPara}>
              I am currently a student at Birla Institute of Technology and
              Science, Pilani. I am pursuing my Bachelors in Technology in
              Electronics and Communication Engineering.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.subHeading}>Work Experience</h2>
            <p className={classes.contentPara}>
              Currently working as a Frontend Engineer Intern at{' '}
              <Link href="https://clevertap.com/">
                <a className={classes.companyLink} target="_blank">
                  Clevertap{' '}
                </a>
              </Link>
            </p>
            <p className={classes.contentPara}>
              Worked as a Frontend Developer at an early stage startup called{' '}
              <Link href="https://www.linkedin.com/company/folioset/">
                <a target="_blank" className={classes.companyLink}>
                  Folioset
                </a>
              </Link>{' '}
              <Link href="https://drive.google.com/file/d/1O5ZSDVW9fkZejB96zdziEJLzD_315wag/view">
                <a className={classes.testimonialLink} target="_blank">
                  (View Testimonial)
                </a>
              </Link>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
