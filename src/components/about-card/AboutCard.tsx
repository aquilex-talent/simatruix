import React from 'react';

import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { SxProps, Theme, useTheme } from "@mui/material";

interface AboutCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  body: string;
  sx?: SxProps<Theme>;
}

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
    <Card sx={{ width: '100%', ...sx }}>
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
    </Card>
  );
}

export default AboutCard;
