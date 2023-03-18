import { Box } from '@mui/material';

import img from 'static/images/shop-card-img-4.png';
import { ShopSection, RedBuyButton } from 'components';

const bodyContent = `Our comprehensive PDF guide is 
designed to help you build strength, gain muscle, 
and unleash your inner warrior. With easy-to-follow 
instructions and video demonstrations, you'll learn 
how to master fundamental movements and progress 
towards more challenging exercises. Our strength camp 
is not just about physical transformation, it's about 
unleashing your inner power and unlocking your full 
potential. So, are you ready to challenge yourself 
and become the strongest version of yourself? Let's 
do this! Remember, every rep and every set counts towards 
a stronger and more confident you. Let's make it happen!`;

const StrengthCamp = () => {
  return (
    <ShopSection
      img={img}
      title="Strength Camp"
      subtitle="Lifetime Access"
      body={bodyContent}
    >
      <Box mt="auto" mb="auto">
        <RedBuyButton link="https://www.trainerize.me/checkout/sematriux/Adam.Mikietinski?planGUID=94a46341cc8a4731ab500551f1d78ca4" />
      </Box>
    </ShopSection>
  );
}

export default StrengthCamp;
