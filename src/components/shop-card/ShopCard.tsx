import React from 'react';
import { Link } from 'react-router-dom';

import Card from "@mui/material/Card";
import { CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import { RedButton } from '../button';

export interface ShopCardProps {
  imageUrl: string;
  title: string;
  body: string;
  url: string;
}

const ResponsiveCard = styled(Card)(({ theme }) => ({
  background: "white",
  minWidth: 300,
  [theme.breakpoints.up('xs')]: {
    width: '100vw',
    borderRadius: 0,
  },
  [theme.breakpoints.up('sm')]: {
    width: 350,
    borderRadius: 5,
  },
}));

const ShopCard = (props: ShopCardProps) => (
  <ResponsiveCard>
    <CardMedia
      component="img"
      height="300"
      image={props.imageUrl}
      alt="card image"
    />
    <CardContent sx={{ height: 120 }}>
      <div
        style={{
          fontFamily: "Open Sans",
          fontSize: 30,
          fontWeight: "bold",
          width: '100%',
          color: '#E9052F',
          textAlign: 'center',
          marginBottom: 8
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          fontFamily: "Open Sans",
          fontSize: 16,
          width: '100%',
          color: 'black',
          textAlign: 'center'
        }}
      >
        {props.body}
      </div>
    </CardContent>
    <CardActions>
      <Link
        to={props.url}
        style={{
          textDecoration: 'none',
          marginLeft: 'auto',
          marginRight: 8,
          marginBottom: 8
        }}
      >
        <RedButton sx={{ borderRadius: 0 }}>Learn More</RedButton>
      </Link>
    </CardActions>
  </ResponsiveCard>
);

export default ShopCard;
