import { startTransition, useState, ViewTransition } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
  articleTopics,
  topicLabels,
  type ArticleFilter,
  type WritingArticle,
} from '../../content/writing-model';

const filters: ArticleFilter[] = ['all', ...articleTopics];

export interface WritingProps {
  articles: WritingArticle[];
}

export const Writing = ({ articles }: WritingProps) => {
  const [activeFilter, setActiveFilter] = useState<ArticleFilter>('all');

  const visibleArticles =
    activeFilter === 'all'
      ? articles
      : articles.filter((article) => article.topics.includes(activeFilter));

  const handleFilterChange = (filter: ArticleFilter) => {
    if (filter === activeFilter) {
      return;
    }

    startTransition(() => {
      setActiveFilter(filter);
    });
  };

  return (
    <Box
      id='writing'
      component='section'
      aria-labelledby='writing-heading'
      sx={{
        py: { xs: 8, lg: 12 },
        scrollMarginTop: 8,
      }}
    >
      <Container
        maxWidth='xxl'
        sx={{ px: { xs: 4, md: 6 } }}
      >
        <Stack gap={{ xs: 5, md: 8 }}>
          <Grid
            container
            spacing={{ xs: 3, md: 8 }}
            alignItems='end'
          >
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack gap={2}>
                <Typography
                  variant='overline'
                  component='p'
                  color='text.primary'
                >
                  Notes on the work
                </Typography>
                <Typography
                  id='writing-heading'
                  variant='h3'
                  component='h2'
                >
                  Writing
                </Typography>
                <Typography
                  variant='body1'
                  component='p'
                  sx={{ maxWidth: '68ch' }}
                >
                  Essays about the systems behind good products: how design
                  decisions scale, how teams build shared language, and how
                  frontend architecture turns intent into reliable experiences.
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                component='p'
                variant='body2'
                color='text.primary'
                sx={{
                  maxWidth: { md: '40ch' },
                  ml: { md: 'auto' },
                }}
              >
                Drafts are previewable locally. Published essays become permanent,
                shareable pages built directly from the writing collection.
              </Typography>
            </Grid>
          </Grid>

          <Stack gap={3}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent='space-between'
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              gap={2}
            >
              <Stack
                component='div'
                role='group'
                aria-label='Filter writing by topic'
                direction='row'
                flexWrap='wrap'
                gap={1}
              >
                {filters.map((filter) => (
                  <Button
                    key={filter}
                    type='button'
                    size='small'
                    variant={activeFilter === filter ? 'contained' : 'outlined'}
                    aria-pressed={activeFilter === filter}
                    onClick={() => handleFilterChange(filter)}
                  >
                    {topicLabels[filter]}
                  </Button>
                ))}
              </Stack>

              <Typography
                component='p'
                role='status'
                aria-live='polite'
                aria-atomic='true'
                variant='body2'
                color='text.primary'
                sx={{ fontVariantNumeric: 'tabular-nums' }}
              >
                {visibleArticles.length}{' '}
                {visibleArticles.length === 1 ? 'draft' : 'drafts'}
              </Typography>
            </Stack>

            {visibleArticles.length > 0 ? (
              <Stack
                component='ul'
                sx={{
                  m: 0,
                  p: 0,
                  listStyle: 'none',
                  borderTop: 1,
                  borderColor: 'divider',
                }}
              >
                {visibleArticles.map((article) => (
                  <ViewTransition
                    key={article.id}
                    default='none'
                    enter='fade-in'
                    exit='fade-out'
                  >
                    <Box
                      component='li'
                      sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                        py: { xs: 4, md: 5 },
                      }}
                    >
                      <Grid
                        component='article'
                        container
                        spacing={{ xs: 2, md: 6 }}
                      >
                        <Grid size={{ xs: 12, md: 3 }}>
                          <Stack
                            direction={{ xs: 'row', md: 'column' }}
                            flexWrap='wrap'
                            gap={{ xs: 1, md: 0.5 }}
                          >
                            <Typography
                              variant='overline'
                              component='span'
                              color='text.primary'
                            >
                              {article.status}
                            </Typography>
                            <Typography
                              variant='body2'
                              component='span'
                              color='text.primary'
                            >
                              {article.readingTime}
                            </Typography>
                            <Typography
                              variant='body2'
                              component='span'
                              color='text.primary'
                            >
                              {article.topics
                                .map((topic) => topicLabels[topic])
                                .join(' · ')}
                            </Typography>
                          </Stack>
                        </Grid>

                        <Grid size={{ xs: 12, md: 9 }}>
                          <Stack gap={1.5}>
                            <Typography
                              variant='h5'
                              component='h3'
                            >
                              {article.href ? (
                                <Link
                                  href={article.href}
                                  color='inherit'
                                  underline='hover'
                                >
                                  {article.title}
                                </Link>
                              ) : (
                                article.title
                              )}
                            </Typography>
                            <Typography
                              variant='body1'
                              component='p'
                              color='text.primary'
                              sx={{ maxWidth: '72ch' }}
                            >
                              {article.summary}
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
                  </ViewTransition>
                ))}
              </Stack>
            ) : (
              <Typography
                component='p'
                role='status'
                variant='body1'
                sx={{ py: 6 }}
              >
                No drafts are available for this topic yet.
              </Typography>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Writing;
