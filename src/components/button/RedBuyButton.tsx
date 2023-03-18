import React from 'react';

import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

import RedButton from './RedButton';

interface RedBuyButtonProps {
  link: string;
  sx?: SxProps<Theme>;
}

const RedBuyButton = ({ link, sx }: RedBuyButtonProps) => (
  <RedButton sx={{ borderRadius: 0, fontSize: 24, width: 300, ...sx }}>
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{ color: "white", textDecoration: "none" }}
    >
      Buy Now
    </a>
  </RedButton>
);

export default RedBuyButton;
