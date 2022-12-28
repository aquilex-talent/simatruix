import { Link } from "react-router-dom";

import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";

import { NavItem } from "./Navbar";

interface MyDrawerProps {
  onClose: () => void;
  navItems: NavItem[];
}

const MyDrawer = ({ onClose, navItems }: MyDrawerProps) => (
  <Box sx={{ textAlign: 'center', marginTop: '60px' }}>
    <List>
      {navItems.map(({ path, label }) => (
        <ListItem key={path} >
          <Link
            to={path}
            onClick={onClose}
            style={{ textDecoration: 'none', width: '100%' }}
          >
            <ListItemButton sx={{ width: '100%' }}>
              <Typography
                variant="largeSemibold"
                sx={{ color: 'black' }}
              >
                {label}
              </Typography>
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default MyDrawer;
