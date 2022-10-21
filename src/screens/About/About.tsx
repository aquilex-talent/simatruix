import React from 'react';
import {
  Typography,
  TypographyProps,
  styled,
  Box,
  BoxProps,
} from "@mui/material";

import about1 from "static/images/about_1.png";
import about2 from "static/images/about_2.png";
import MailChimpFormContainer from "../../components/newsletter/MailchimpFormContainer";

import 'main.css';
import { AboutCard } from 'components';

const WhiteText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFFFFF",
}));

const RedText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const Container = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('xs')]: {
    marginTop: 110,
    width: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: 160,
  },
  [theme.breakpoints.up('md')]: {
    marginTop: 210,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: 260,
    width: '60%',
  },
}));

const Section = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
    marginTop: '50px',
    aligntItems: 'center',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    marginTop: '100px',
    alignItems: 'flex-end',
  },
}));

const SectionText = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(4),
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(4),
    margiRight: theme.spacing(4),
  },
}));

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const About = () => {
  return (
    <Container>
      <WhiteText variant="h1">Revolutionise your life.</WhiteText>
      <WhiteText variant="h1">Permanentely.</WhiteText>
      <AboutCard
        imageUrl={about1}
        title="Who am I?"
        subtitle="Subtitle"
        body={loremIpsum}
        sx={{ mt: 8 }}
      />
      <AboutCard
        imageUrl={about2}
        title="What can I do for you?"
        subtitle="Subtitle"
        body={loremIpsum}
        sx={{ mt: 4 }}
      />
      {/* <Section>
        <Box
          sx={{
            '@media (min-width:0px)': {
              width: '100%',
            },
            '@media (min-width:900px)': {
              maxWidth: '600px',
            }
          }}
        >
          <img src={about1} alt="about1" style={{ width: '100%' }} />
        </Box>
        <SectionText>
          <WhiteText variant="h2">ADAM MIKIETINSKI</WhiteText>
          <RedText variant="h3" marginTop="48px">
            Bodybuilder. Coach. Greek God.
          </RedText>
          <WhiteText variant="largeSemibold" marginTop="24px">
            Sematriux Fitness is all about helping you be the best version of
            yourself.
          </WhiteText>
          <WhiteText variant="largeSemibold" marginTop="16px">
            I will help you get where you to be with:
          </WhiteText>

          <WhiteText variant="large"> - Workout plans</WhiteText>

          <WhiteText variant="large"> - Nutrition plans</WhiteText>

          <WhiteText variant="large"> - 1 on 1 coaching</WhiteText>

        </SectionText>
      </Section>
      <Section
        sx={{
          '@media (min-width:900px)': {
            flexDirection: 'row-reverse',
          }
        }}
      >
        <Box
          sx={{
            '@media (min-width:0px)': {
              width: '100%',
            },
            '@media (min-width:900px)': {
              maxWidth: '400px',
            }
          }}
        >
          <img src={about2} alt="about2" style={{ width: '100%' }} />
        </Box>
        <SectionText>
          <WhiteText variant="largeSemibold" marginTop="16px">
            Do you want to learn what it takes to train like a professional
            athlete and get the results that you always desired?
          </WhiteText>
          <WhiteText variant="largeSemibold" marginTop="16px">
            It takes tremendous amount of discipline and resilience in order
            to adapt and succeed.
          </WhiteText>
          <WhiteText variant="largeSemibold" marginTop="16px">
            How do YOU get there?
          </WhiteText>
          <WhiteText variant="largeSemibold" marginTop="16px">
            No bullshit approach but consistency, hard work (in and outside
            the gym) and smart programming.
          </WhiteText>
          <WhiteText variant="largeSemibold" marginTop="16px">
            Nobody can do the work for you, you get what you put in. This
            being said the journey doesn’t have to be lonely and confusing
            with a professional by your side!
          </WhiteText>
          <WhiteText variant="largeSemibold" marginTop="16px">
            If you want to look like a Greek God, you have to become one.
          </WhiteText>
        </SectionText>
      </Section> */}
      <Section marginBottom="40px">
        <MailChimpFormContainer />
      </Section>
    </Container>
  )
}

export default About;
