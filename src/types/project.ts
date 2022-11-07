import { IGetPlaiceholderReturn } from 'plaiceholder';

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  color: 'bluePink' | 'greenBlue' | 'orangeGreen' | 'yellowPurple' | undefined;
  links: {
    github?: string;
    preview?: string;
    linkedIn?: string;
    testimonial?: string;
  };
  coverImage: string;
  techStack: {
    link: string;
    alt: string;
  }[];
  domains: string[];
  image: IGetPlaiceholderReturn;
};
