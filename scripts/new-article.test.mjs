import assert from 'node:assert/strict';
import { mkdtemp, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';

import {
  createArticle,
  createArticleTemplate,
  slugifyArticleTitle,
} from './new-article.mjs';

test('slugifyArticleTitle creates a stable URL-safe slug', () => {
  assert.equal(
    slugifyArticleTitle('  Component APIs: A Designer’s Contract  '),
    'component-apis-a-designers-contract',
  );
});

test('createArticleTemplate creates a schema-valid draft by default', () => {
  const template = createArticleTemplate('Designing Better Defaults');

  assert.match(template, /title: "Designing Better Defaults"/);
  assert.match(template, /topics:\n {2}- design/);
  assert.match(template, /readingTime: 5/);
  assert.match(template, /draft: true/);
  assert.match(template, /type: image/);
  assert.match(template, /loading="lazy"/);
  assert.doesNotMatch(template.split('---').slice(2).join('---'), /^# /m);
});

test('createArticle writes one Markdown file and refuses to overwrite it', async () => {
  const root = await mkdtemp(join(tmpdir(), 'yofolio-writing-'));

  const filePath = await createArticle('A Durable Design System', root);
  const content = await readFile(filePath, 'utf8');

  assert.equal(
    filePath,
    join(root, 'src/content/writing/a-durable-design-system.md'),
  );
  assert.match(content, /title: "A Durable Design System"/);

  await assert.rejects(
    createArticle('A Durable Design System', root),
    /already exists/,
  );
});
