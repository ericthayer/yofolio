import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

import { articleTopics } from './content/writing-model';
import { articleMediaSchema } from './content/media-model';

const writing = defineCollection({
  loader: glob({
    base: './src/content/writing',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z
    .object({
      title: z.string().trim().min(1),
      summary: z.string().trim().min(1),
      topics: z.array(z.enum(articleTopics)).min(1),
      readingTime: z.number().int().positive(),
      draft: z.boolean(),
      publishedAt: z.coerce.date().optional(),
      media: z.array(articleMediaSchema).optional(),
    })
    .superRefine((article, context) => {
      if (!article.draft && !article.publishedAt) {
        context.addIssue({
          code: 'custom',
          message: 'Published articles require a publishedAt date.',
          path: ['publishedAt'],
        });
      }
    }),
});

export const collections = { writing };
