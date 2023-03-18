import { Box } from '@mui/material';

import img from 'static/images/shop-card-img-2.png';
import { ShopSection, RedBuyButton } from 'components';

const bodyContent = `With our app membership, you will have 
access to a vast library of exercise videos that will inspire, 
challenge, and empower you to take your fitness journey to the 
next level. Our videos are designed to cater to your specific 
fitness goals and preferences. With our easy-to-follow instructions, 
you will learn proper form and technique, ensuring that every
 workout is safe and effective. So, are you ready to push yourself 
 and unleash your full potential? Join our community of fitness 
 enthusiasts today and let's sweat, smile, and succeed together! 
 Remember, consistency is the key to achieving your fitness goals, 
 and we are here to support you every step of the way. Let's do this!`;

const AppMembership = () => {
  return (
    <ShopSection
      img={img}
      title="App Membership"
      subtitle="Become a Greek God"
      body={bodyContent}
    >
      <Box mt="auto" mb="auto">
        <RedBuyButton link="https://www.trainerize.me/checkout/sematriux/Adam.Mikietinski?planGUID=1431cd0c722b4dee93870d5b356f5c13" />
      </Box>
    </ShopSection>

  );
}

export default AppMembership;
