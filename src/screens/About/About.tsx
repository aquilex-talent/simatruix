import React from 'react';

import 'main.css';

import {
  styled,
  Box,
  BoxProps,
} from "@mui/material";

import about1 from "static/images/about_1.png";
import about2 from "static/images/about_2.png";

import { AboutCard } from 'components';

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

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const About = () => {
  return (
    <Container>
      <AboutCard
        imageUrl={about1}
        title="Who am I?"
        subtitle="Subtitle"
        body={loremIpsum}
        sx={{ mt: 2 }}
      />
      <AboutCard
        imageUrl={about2}
        title="What can I do for you?"
        subtitle="Subtitle"
        body={loremIpsum}
        sx={{ mt: 4, mb: 2 }}
      />
    </Container>
  )
}

export default About;
