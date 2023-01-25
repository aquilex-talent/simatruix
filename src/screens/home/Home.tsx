import React from 'react';

import 'main.css';

import {
  Typography,
  TypographyProps,
  styled,
  Box,
  BoxProps,
} from "@mui/material";

import { InstaFeed, MailchimpFormContainer, RedButton, Carousel } from 'components';

const WhiteText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFFFFF",
}));

const Container = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  marginTop: 60,
  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    width: '60%',
  },
}));

const Section = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  width: '100%',
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

const benefits = [
  "PRICE ON ENQUIRY",
  "SUPPORT VIA WhatsApp",
  "CHECK-INS WEEKLY IN OFFSEASON AND AS OFTEN AS NEEDED IN PREP",
  "FULL TRAINING & NUTRITION PROGRAM",
  "PLAN ALTERATIONS AS NEEDED",
  "FULL SUPPORT THROUGHOUT YOUR PREP AND OFFSEASON",
  "PHONE CALLS/SKYPE CALLS IF NEEDED",
  "ANALYSING YOUR TRAINING VIDEOS",
  "AND MUCH MORE!!",
]

const Home = () => {
  const postUrl = process.env.REACT_APP_MAILCHIMP_URL;

  return (
    <Container>
      <WhiteText variant="h1" sx={{ marginTop: 2, alignSelf: 'center' }} >
        Revolutionise.
      </WhiteText>
      <WhiteText variant="h1" sx={{ alignSelf: 'center' }} gutterBottom>
        Permanentely.
      </WhiteText>
      <WhiteText variant="body1" sx={{ marginBottom: 2 }}>
        Welcome to the home of Sematriux Fitness where you can find out all you need to know about me and my team.
        Throughout my 5 years of experience in the industry, I have explored many different methods and have been lucky enough to work with some great mentors to build
        my knowledge as a coach. This knowledge has helped to bring me here as the head coach of Sematriux Fitness.
      </WhiteText>
      <WhiteText variant="body1" sx={{ marginBottom: 2 }}>
        As a coach, I work solely with athletes who are willing to commit at the highest level and show a meticulous work ethic.
        If you apply to work with me I will assess whether I think you are the right fit for the team before agreeing to working with you.
      </WhiteText>
      <WhiteText variant="body1" sx={{ marginBottom: 2 }}>
        As a member of my team you will have access to exclusive team content on this site including educational videos, a workout library and tutorials.
      </WhiteText>
      <WhiteText variant="body1" sx={{ marginBottom: 2 }}>
        Are you ready?
      </WhiteText>
      <RedButton sx={{ marginX: 'auto', borderRadius: 0 }} href="/shop">
        <Typography variant="largeSemibold" sx={{ marginX: 2 }}>Start Now</Typography>
      </RedButton>
      <Carousel />
      {postUrl &&
        <Section marginBottom="40px">
          <MailchimpFormContainer postUrl={postUrl} />
        </Section>
      }
    </Container>
  )
}

export default Home;
