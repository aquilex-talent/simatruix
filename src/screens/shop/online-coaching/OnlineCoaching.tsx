import React from 'react';

import { Box } from '@mui/material';

import img from 'static/images/shop-card-img-1.png';
import { ShopSection, RedBuyButton } from '../../../components';

const OnlineCoaching = () => {
  return (
    <ShopSection
      img={img}
      title="Online Coaching"
      subtitle="Become a Greek God"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    >
      <Box mt="auto" mb="auto">
        <RedBuyButton link="https://www.trainerize.me/checkout/sematriux/Adam.Mikietinski?planGUID=c56eee2748a94e16b856429cc5760962" />
      </Box>
    </ShopSection>
  );
}

export default OnlineCoaching;
