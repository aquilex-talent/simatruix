import React from 'react';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, SxProps, Theme, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

interface AboutCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  body: string;
  sx?: SxProps<Theme>;
}

const ResponsiveCard = styled(Card)(({ theme }) => ({
  borderRadius: 0,
  [theme.breakpoints.up("lg")]: {
    width: 900,
  },
  [theme.breakpoints.down("lg")]: {
    width: 800,
  },
  [theme.breakpoints.down("md")]: {
    width: 500,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    minWidth: 300,
  },
}));

const ResponsiveCardMedia = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up("xl")]: {
    height: 400,
  },
  [theme.breakpoints.up("sm")]: {
    height: 300,
  },
  [theme.breakpoints.down("sm")]: {
    height: 200,
  },
}))

const AboutCard = ({ imageUrl, title, subtitle, body, sx }: AboutCardProps) => {
  const theme = useTheme();
  
  return (
    <ResponsiveCard sx={sx}>
      <ResponsiveCardMedia
        image={imageUrl}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          color={theme.palette.secondary.main}
          fontWeight="bold"
        >
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          fontWeight="bold"
          mt={2}
        >
          {subtitle}
        </Typography>
        <Typography
          gutterBottom
          variant="normal"
          component="div"
          mt={4}
        >
          {body}
        </Typography>
      </CardContent>
    </ResponsiveCard>
  );
}

export default AboutCard;
