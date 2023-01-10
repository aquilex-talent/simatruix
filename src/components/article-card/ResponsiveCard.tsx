import React from 'react';

import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

export const ResponsiveCard = styled(Card)(({ theme }) => ({
  background: "red",
  [theme.breakpoints.up("sm")]: {
    width: 600,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    minWidth: 300,
    borderRadius: 0,
  },
}));