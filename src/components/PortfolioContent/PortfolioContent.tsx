import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface CoreStrength {
  name: string;
  description: string;
}

const coreStrengths: CoreStrength[] = [
  {
    name: 'Agentic Design Systems & AI Workflows',
    description:
      'I build React and MUI systems, MCP-powered agent toolkits, and AI-enabled workflows that turn shared standards into faster, more consistent delivery.',
  },
  {
    name: 'Front-end Architecture & Scalability',
    description:
      'I architect reusable component platforms and prototyping systems across React, Vue.js, and complex product ecosystems.',
  },
  {
    name: 'Accessibility & Developer Enablement',
    description:
      'I improve system access, guidance, and implementation workflows—reducing performance and accessibility errors by 37% while enabling more contributors.',
  },
];

const cobankAchievements: string[] = [
  'Built and maintained a React and MUI agentic design system used by more than 120 developers and designers.',
  'Developed an MCP server and agent toolkit that cut development time by 40%.',
  'Created agentic spec and drift detection tooling for development and CI/CD, reducing drift-related fixes by 33%.',
  'Improved design system access and implementation workflows, reducing performance and accessibility errors by 37%.',
];

const gameStatements: string[] = [
  'I built an agentic React and MUI design system used by more than 120 developers and designers.',
  'I have built reusable UI systems for both Vue.js web products and Unity-based VR experiences.',
  'I created one cross-platform component library that rendered the same components in browsers and Unity VR.',
];

export const PortfolioContent = () => {
  return (
    <>
      <Box
        id='about'
        component='section'
        sx={{
          backgroundColor: 'secondary.light',
          py: { xs: 8, lg: 12 },
          scrollMarginTop: 8,
        }}
      >
        <Container
          maxWidth='xxl'
          sx={{ px: { xs: 4, md: 6 } }}
        >
          <Stack gap={8}>
            <Stack gap={2}>
              <Typography
                variant='h4'
                component='h2'
                sx={{ textTransform: 'uppercase' }}
              >
                Core Strengths
              </Typography>
              <Typography
                variant='body1'
                component='p'
                sx={{ maxWidth: { md: '72ch' } }}
              >
                Design systems leadership grounded in reusable architecture,
                intelligent tooling, and measurable delivery outcomes.
              </Typography>
            </Stack>

            <Grid
              container
              spacing={4}
            >
              {coreStrengths.map((strength) => (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4 }}
                  key={strength.name}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      border: 1,
                      borderColor: 'divider',
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack gap={2}>
                        <Typography
                          variant='h5'
                          component='h3'
                        >
                          {strength.name}
                        </Typography>
                        <Typography variant='body2'>
                          {strength.description}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box
        id='experience'
        component='section'
        sx={{
          py: { xs: 8, lg: 12 },
          scrollMarginTop: 8,
        }}
      >
        <Container
          maxWidth='xxl'
          sx={{ px: { xs: 4, md: 6 } }}
        >
          <Grid
            container
            spacing={{ xs: 4, md: 8 }}
          >
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack gap={1}>
                <Typography
                  variant='overline'
                  component='p'
                  color='text.secondary'
                >
                  Featured Experience
                </Typography>
                <Typography
                  variant='h3'
                  component='h2'
                >
                  Senior UX Engineer at CoBank
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                >
                  Greenwood Village, CO · December 2023–Present
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Stack
                component='ul'
                gap={2}
                sx={{
                  m: 0,
                  pl: 3,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {cobankAchievements.map((achievement) => (
                  <Typography
                    component='li'
                    variant='body1'
                    key={achievement}
                  >
                    {achievement}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        id='game'
        component='section'
        sx={{
          backgroundColor: 'secondary.light',
          py: { xs: 8, lg: 12 },
          scrollMarginTop: 8,
        }}
      >
        <Container
          maxWidth='md'
          sx={{ px: { xs: 4, md: 6 } }}
        >
          <Stack gap={4}>
            <Stack gap={2}>
              <Typography
                variant='h4'
                component='h2'
                sx={{ textTransform: 'uppercase' }}
              >
                Two Truths and a Fib
              </Typography>
              <Typography variant='body1'>
                Two statements are resume-backed results. One stretches the
                metric just a little. Can you spot it?
              </Typography>
            </Stack>

            <Stack
              component='ol'
              gap={2}
              sx={{
                m: 0,
                pl: 3,
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {gameStatements.map((statement) => (
                <Typography
                  component='li'
                  variant='h6'
                  key={statement}
                >
                  {statement}
                </Typography>
              ))}
            </Stack>

            <Box
              component='details'
              sx={{
                borderTop: 1,
                borderColor: 'divider',
                pt: 2,
              }}
            >
              <Box
                component='summary'
                sx={{
                  cursor: 'pointer',
                  fontWeight: 'fontWeightBold',
                  minHeight: 44,
                  py: 1,
                }}
              >
                Reveal the fib
              </Box>
              <Typography
                component='p'
                variant='body2'
                sx={{ mt: 1 }}
              >
                Statement three is the fib. The Vue.js web component system and
                Unity UI Toolkit design system were separate, platform-specific
                systems—not one cross-platform library.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default PortfolioContent;
