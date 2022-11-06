import React from 'react';
import clsx from 'clsx';
import classes from '@/scss/components/work-card/work-card.module.scss';
import Image from 'next/image';
import { BsLinkedin } from 'react-icons/bs';
import { Project } from '@/types/project';
import { HiOutlineChatAlt } from 'react-icons/hi';

import { Tooltip } from '@/components/ui/tooltip';
import Link from '../ui/link';

interface WorkCardProps {
  work: Project;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  return (
    <>
      <div className={clsx([classes.root])}>
        <div>
          <div className={classes.content}>
            <h2 className={classes.title}>{work.title}</h2>
            <small className={classes.role}>{work.domains[0]} Developer</small>
            <div className={classes.techStack}>
              {work.techStack.map((work) => (
                <Tooltip text={work.alt} key={work.link}>
                  <figure>
                    <Image
                      style={{ borderRadius: '50%' }}
                      src={work.link}
                      alt={work.alt}
                      loading="lazy"
                      height={30}
                      width={30}
                    />
                  </figure>
                </Tooltip>
              ))}
            </div>
            <p className={classes.description}>{work.description}</p>
          </div>
          <ul className={classes.cta}>
            {work.links.linkedIn && (
              <Link
                target="_blank"
                icon={<BsLinkedin size={20} />}
                text="Linked In"
                href={work.links.linkedIn}
              />
            )}
            {work.links.testimonial && (
              <Link
                target="_parent"
                text="Testimonial"
                icon={<HiOutlineChatAlt size={20} />}
                href={work.links.testimonial}
              />
            )}
          </ul>
        </div>
        <figure className={classes.media}>
          <Image
            blurDataURL={work.image.base64}
            placeholder="blur"
            src={work.image.img.src}
            alt={work.title}
            loading="lazy"
            height={work.image.img.height}
            width={work.image.img.width}
          />
        </figure>
      </div>
    </>
  );
};

export default WorkCard;
