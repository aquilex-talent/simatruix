import React from 'react';

import 'main.css';

import {
  Typography,
  TypographyProps,
  styled,
  Box,
  BoxProps,
} from "@mui/material";

import { InstaFeed, MailchimpFormContainer } from 'components';

const WhiteText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFFFFF",
}));

const Container = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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

const Home = () => {
  const postUrl = process.env.REACT_APP_MAILCHIMP_URL;

  return (
    <Container>
      <WhiteText variant="h1" sx={{ marginTop: 2 }}>Revolutionise.</WhiteText>
      <WhiteText variant="h1">Permanentely.</WhiteText>
      <div style={{ marginTop: 28 }}>
        <InstaFeed />
      </div>
      {postUrl &&
        <Section marginBottom="40px">
          <MailchimpFormContainer postUrl={postUrl} />
        </Section>
      }
    </Container>
  )
}

export default Home;
