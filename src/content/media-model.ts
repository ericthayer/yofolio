import { z } from 'astro/zod';

export const articleMediaSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('image'),
    src: z.string().trim().min(1),
    alt: z.string().trim().min(1),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
    caption: z.string().trim().min(1).optional(),
    loading: z.enum(['eager', 'lazy']).default('lazy'),
  }),
  z.object({
    type: z.literal('video'),
    src: z.string().trim().min(1),
    title: z.string().trim().min(1),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
    captions: z.string().trim().min(1),
    poster: z.string().trim().min(1).optional(),
    caption: z.string().trim().min(1).optional(),
  }),
  z.object({
    type: z.literal('document'),
    src: z.string().trim().min(1),
    title: z.string().trim().min(1),
    description: z.string().trim().min(1),
    label: z.string().trim().min(1).optional(),
    mimeType: z.string().trim().min(1).optional(),
  }),
]);

export type ArticleMedia = z.infer<typeof articleMediaSchema>;
