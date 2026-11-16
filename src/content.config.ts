import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each post is src/content/blog/<slug>.md and is served at /posts/<slug>/,
// matching the URLs of the old Gatsby blog.
const blog = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    id: z.number().optional(),
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog };
