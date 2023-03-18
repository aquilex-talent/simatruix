import React, { useState } from 'react';

import Menu from '@mui/material/Menu';
import { Box, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import img from 'static/images/shop-card-img-3.png';
import { ShopSection, RedBuyButton } from 'components';

interface SessionInfo {
  url: string;
  description: string;
}

const sessions: { [id: number]: SessionInfo } = {
  4: {
    url: 'https://www.trainerize.me/profile/sematriux/?planGUID=d65f772bb8614501954d792b280fb1ca',
    description: '4 sessions'
  },
  6: {
    url: 'https://www.trainerize.me/profile/sematriux/?planGUID=11f14f5fdbea46bf9bfbc0235d7d9e31',
    description: '6 sessions'
  },
  8: {
    url: 'https://www.trainerize.me/profile/sematriux/?planGUID=49610d6045024837bc05c803e11b6b19',
    description: '8 sessions'
  },
  10: {
    url: 'https://www.trainerize.me/profile/sematriux/?planGUID=6026b6f829874dbdbc1063fb0ad88ac3',
    description: '10 sessions'
  },
  12: {
    url: 'https://www.trainerize.me/checkout/sematriux/Adam.Mikietinski?planGUID=25aefb260c214d7988d101875c0f77fe',
    description: '12 sessions'
  },
  14: {
    url: 'https://www.trainerize.me/profile/sematriux/?planGUID=1476bc8579d44ac6a95ba65451cce9fa',
    description: '14 sessions'
  },
}

const bodyContent = `I am committed to providing you with a customized fitness 
experience that is tailored to your unique needs and goals. With my undivided 
attention and expertise, we will work together to create a personalized 
workout plan that is both challenging and enjoyable. Through our 1-on-1 sessions, 
I will be able to identify your strengths and weaknesses, and provide you with 
the feedback and guidance you need to maximize your potential. Whether you're 
looking to lose weight, gain muscle, or improve your overall fitness level, our 
sessions will help you reach your goals faster and with greater efficiency. So, 
are you ready to invest in yourself and take your fitness to the next level? 
Let's start working together and achieve amazing results that you never thought 
were possible. Remember, your dedication and hard work will pay off, and I'll 
be here to celebrate every milestone with you!`;

const Sessions = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [numberSessions, setNumberSessions] = useState<number>(14);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (numberOfSessions: number) => {
    setNumberSessions(numberOfSessions);
    handleClose();
  }

  return (
    <ShopSection
      img={img}
      title="PT Sessions"
      subtitle="Abs are made in the kitchen"
      body={bodyContent}
    >
      <Box
        display="flex"
        flexDirection="column"
        mt="auto"
        mb="auto"
      >
        <Button
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ width: 300 }}
        >
          {sessions[numberSessions].description}
        </Button>
        <Menu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {Object.keys(sessions).map((key: string) => {
            const val: number = +key;
            return (
              <MenuItem
                sx={{ width: 300 }}
                onClick={() => handleMenuItemClick(val)}
              >
                {sessions[val].description}
              </MenuItem>
            );
          })}
        </Menu>
        <RedBuyButton
          sx={{ mt: 4 }}
          link={sessions[numberSessions].url}
        />
      </Box>
    </ShopSection>
  );
}

export default Sessions;
