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
import { InstaFeed } from 'components';
import AboutCard from '../../components/about-card/AboutCard';

const WhiteText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFFFFF",
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
        sx={{ mt: 4, mb: 4 }}
      />
      <InstaFeed />
      <Section marginBottom="40px">
        <MailChimpFormContainer />
      </Section>
    </Container>
  )
}

export default About;
