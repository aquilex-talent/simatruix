import React, { useState } from 'react';

import { Box, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import img from 'static/images/shop-card-img-3.png';
import { ShopSection, RedBuyButton } from '../../../components';

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
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    >
      <Box display="flex" flexDirection="column" mt="auto" mb="auto">
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
              <MenuItem onClick={() => handleMenuItemClick(val)} sx={{ width: 300 }}>
                {sessions[val].description}
              </MenuItem>
            );
          })}
        </Menu>
        <RedBuyButton link={sessions[numberSessions].url} sx={{ mt: 4 }} />
      </Box>
    </ShopSection>
  );
}

export default Sessions;
