import { defineCollection, z } from 'astro:content';

const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  links: z.object({
    github: z.string(),
    preview: z.string().nullish(),
  }),
  coverImage: z.string(),
  domains: z.array(z.string()),
  techStack: z.array(
    z.object({
      link: z.string(),
      alt: z.string(),
    })
  ),
});

const workSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  role: z.array(z.string()),
  links: z.object({
    linkedIn: z.string(),
    testimonial: z.string(),
  }),
  coverImage: z.string(),
  domains: z.array(z.string()),
  techStack: z.array(
    z.object({
      link: z.string(),
      alt: z.string(),
    })
  ),
});

const projectsCollection = defineCollection({
  schema: projectSchema,
});
const workCollection = defineCollection({
  schema: workSchema,
});

export const collections = {
  projects: projectsCollection,
  work: workCollection,
};

export type Project = z.infer<typeof projectSchema>;
export type Work = z.infer<typeof workSchema>;
