import { Box } from '@mui/material';

import img from 'static/images/shop-card-img-4.png';
import { ShopSection, RedBuyButton } from '../../../components';

const StrengthCamp = () => {
  return (
    <ShopSection
      img={img}
      title="Strength Camp"
      subtitle="Lifetime Access"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    >
      <Box mt="auto" mb="auto">
        <RedBuyButton link="https://www.trainerize.me/checkout/sematriux/Adam.Mikietinski?planGUID=94a46341cc8a4731ab500551f1d78ca4" />
      </Box>
    </ShopSection>
  );
}

export default StrengthCamp;
