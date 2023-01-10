import React, { FC } from "react";

import { styled } from "@mui/material/styles";
import {
  AppBar,
  AppBarProps,
  Typography,
  Toolbar,
  Box,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import NavbarLink from "./NavbarLink";
import MyDrawer from "./MyDrawer";

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  position: "fixed",
  zIndex: "10000",
  backgroundColor: "primary.main",
  height: 60,
  width: "100%",
  margin: 0,
}));

export interface NavItem {
  path: string;
  label: string;
}

const drawerWidth = 240;
const navItems: NavItem[] = [
  {
    path: "/about",
    label: "About"
  },
  {
    path: "/blog",
    label: "Blog"
  },
  {
    path: "/shop",
    label: "Shop"
  },
]

const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prev => !prev);
  };

  return (
    <>
      <StyledAppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
          >
            Simatriux
          </Typography>
          <Box
            sx={{
              marginLeft: "auto",
              display: {
                xs: 'none',
                sm: 'none',
                md: 'block',
                lg: 'block',
                xl: 'block'
              }
            }}>
            {navItems.map(({ path, label }) => (
              <NavbarLink key={path} path={path} label={label} />
            ))}
          </Box>
        </Toolbar>
      </StyledAppBar>
      <Box component="nav">
        <Drawer
          open={mobileOpen}
          variant="temporary"
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: {
              xs: 'block',
              sm: 'block',
              md: 'none'
            },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          <MyDrawer onClose={handleDrawerToggle} navItems={navItems} />
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
