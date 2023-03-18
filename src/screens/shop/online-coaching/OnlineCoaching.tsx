import React from 'react';

import { Box } from '@mui/material';

import img from 'static/images/shop-card-img-1.png';
import { ShopSection, RedBuyButton } from 'components';

const bodyContent = `I am here to empower you to become the strongest, healthiest, 
and happiest version of yourself! I believe that with the right mindset, guidance, 
and consistency, anything is possible. Together, we will crush your fitness goals 
and create positive habits that will last a lifetime. Don't let any obstacle or 
self-doubt hold you back from achieving your full potential. With my customized 
workout plans and nutrition coaching, you will see amazing results and feel a sense 
of accomplishment that will fuel your motivation even further. Remember, you are 
capable of achieving greatness, and I am here to help you make it happen! Let's 
start your journey to a better you today!`;

const OnlineCoaching = () => {
  return (
    <ShopSection
      img={img}
      title="Online Coaching"
      subtitle="Become a Greek God"
      body={bodyContent}
    >
      <Box mt="auto" mb="auto">
        <RedBuyButton link="https://www.trainerize.me/checkout/sematriux/Adam.Mikietinski?planGUID=c56eee2748a94e16b856429cc5760962" />
      </Box>
    </ShopSection>
  );
}

export default OnlineCoaching;
