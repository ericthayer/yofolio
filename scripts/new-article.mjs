import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { pathToFileURL } from 'node:url';

export function slugifyArticleTitle(title) {
  return title
    .trim()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function createArticleTemplate(title) {
  return `---
title: ${JSON.stringify(title)}
summary: "Replace this with a concise description of the article."
topics:
  - design
readingTime: 5
draft: true
# Optional featured media. Use local files in public/media/ or trusted URLs.
# media:
#   - type: image
#     src: /media/article-cover.webp
#     alt: Describe the image for someone who cannot see it.
#     width: 1600
#     height: 900
#     caption: Optional caption.
---

Open with the problem, observation, or tension this article will explore.

## Working notes

Develop the argument here. Use second-level headings because the article layout
already renders the page title as the single first-level heading.

<!--
Inline HTML media placeholder:
<figure>
  <img
    src="/media/example.webp"
    alt="Describe the image"
    width="1600"
    height="900"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Explain why this media matters.</figcaption>
</figure>

For video, use MDX and the ArticleMedia component so captions are required.
-->
`;
}

export async function createArticle(title, rootDirectory = process.cwd()) {
  const normalizedTitle = title.trim();
  const slug = slugifyArticleTitle(normalizedTitle);

  if (!normalizedTitle || !slug) {
    throw new Error('Provide an article title containing letters or numbers.');
  }

  const filePath = join(
    rootDirectory,
    'src',
    'content',
    'writing',
    `${slug}.md`,
  );

  await mkdir(dirname(filePath), { recursive: true });

  try {
    await writeFile(filePath, createArticleTemplate(normalizedTitle), {
      encoding: 'utf8',
      flag: 'wx',
    });
  } catch (error) {
    if (
      error &&
      typeof error === 'object' &&
      'code' in error &&
      error.code === 'EEXIST'
    ) {
      throw new Error(`Article already exists: ${relative(rootDirectory, filePath)}`);
    }

    throw error;
  }

  return filePath;
}

const isDirectExecution =
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href;

if (isDirectExecution) {
  const title = process.argv.slice(2).join(' ');

  try {
    const filePath = await createArticle(title);
    console.log(`Created ${relative(process.cwd(), filePath)}`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
