export const articleTopics = [
  'design',
  'ux',
  'design-systems',
  'frontend',
] as const;

export type ArticleTopic = (typeof articleTopics)[number];
export type ArticleFilter = 'all' | ArticleTopic;

export interface WritingArticle {
  id: string;
  title: string;
  summary: string;
  topics: ArticleTopic[];
  status: 'Draft' | 'Published';
  readingTime: string;
  href: string;
  publishedAt?: string;
}

export const topicLabels: Record<ArticleFilter, string> = {
  all: 'All',
  design: 'Design',
  ux: 'UX',
  'design-systems': 'Design Systems',
  frontend: 'Frontend',
};
