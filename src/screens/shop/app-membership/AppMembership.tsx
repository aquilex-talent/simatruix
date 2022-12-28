import { Box } from '@mui/material';

import img from 'static/images/shop-card-img-2.png';
import { ShopSection, RedBuyButton } from 'components';

const AppMembership = () => {
  return (
    <ShopSection
      img={img}
      title="App Membership"
      subtitle="Become a Greek God"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    >
      <Box mt="auto" mb="auto">
        <RedBuyButton link="https://www.trainerize.me/checkout/sematriux/Adam.Mikietinski?planGUID=1431cd0c722b4dee93870d5b356f5c13" />
      </Box>
    </ShopSection>

  );
}

export default AppMembership;
