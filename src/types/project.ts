export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  color: 'bluePink' | 'greenBlue' | 'orangeGreen' | 'yellowPurple' | undefined;
  links: {
    github: string;
    preview?: string;
  };
  coverImage: string;
  techStack: {
    link: string;
    alt: string;
  }[];
  domains: string[];
};
