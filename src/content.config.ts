import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    authors: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    draft: z.boolean().default(false)
  })
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    authors: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

const people = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    role: z.enum(['Faculty', 'Postdoc', 'PhD Student', 'MSc Student', 'Researcher', 'Collaborator', 'Alumni']),
    order: z.number().default(100),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
    photo: z.string().optional(),
    aliases: z.array(z.string()).default([]),
    interests: z.array(z.string()).default([])
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['Active', 'Completed']).default('Active'),
    people: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([])
  })
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    tags: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    featured: z.boolean().default(false)
  })
});

export const collections = { news, posts, people, projects, publications };
