import React from 'react';
import 'main.css';

import {
  styled,
  Box,
  BoxProps,
  Typography,
  TypographyProps,
} from "@mui/material";

import about1 from "static/images/about_1.png";

import { InstaFeed } from 'components';

const WhiteText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFFFFF",
}));

const Container = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 60,
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.up('xs')]: {
    width: '400px'
  },
  [theme.breakpoints.up('sm')]: {
    width: '70%',
  },
  [theme.breakpoints.up('md')]: {
    width: '60%',
  },
}));

const About = () => (
  <Container>
    <Box className='about-page-info-container' sx={{ marginBottom: 4 }}>
      <img src={about1} alt="Adam" className='about-page-img1' />
      <div>
        <WhiteText variant="body1" sx={{ marginBottom: 2 }}>
          I am an Professional bodybuilder with 5 years of coaching and competitive experience.
          I have dozens of success stories which you can see throughout this website and via my social media platforms Instagram (@SematriuxFitness)
        </WhiteText>
        <WhiteText variant="body1" sx={{ marginBottom: 2 }}>
          I offer professional coaching services to athletes (competitive and non-competitive) to improve and change their lives.
          I work with regular gym-goers to professional level athletes who display the highest level of commitment and a phenomenal work ethic
        </WhiteText>
        <WhiteText variant="body1" sx={{ marginBottom: 2 }}>
          Payment will be made per month via GoCardless. No extra charges throughout.
          I can justify my prices as you are not just a number on my books you are a part of my team and we will work closely and personally together on your journey.
        </WhiteText>
      </div>
    </Box>
    <InstaFeed />
  </Container>
)

export default About;
