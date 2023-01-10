import React from 'react';

import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import img from "static/images/spaceman.jpg";

import { ResponsiveCard } from './ResponsiveCard';

const EmptyArticleCard = () => (
  <ResponsiveCard>
    <CardActionArea style={{ background: "white" }}>
      <CardMedia
        component="img"
        height="160"
        image={img}
        alt="card image"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="black"
          textAlign="center"
          fontWeight="bold"
        >
          Nothing to show yet!
        </Typography>
      </CardContent>
    </CardActionArea>
  </ResponsiveCard>
);

export default EmptyArticleCard;