import React, { FC } from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { Theme, Typography, useTheme } from "@mui/material";

const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
  marginRight: 20,
  textDecoration: "none",
}));

interface NavbarLinkProps {
  path: string;
  label: string;
}

const getColor = (theme: Theme, location: string, targetLocation: string) => {
  return location.includes(targetLocation)
    ? theme.palette.secondary.main
    : "#FFFFFF";
};

const NavbarLink: FC<NavbarLinkProps> = ({ path, label }) => {
  const location = useLocation();
  const theme = useTheme();

  return (
    <StyledLink to={path}>
      <Typography
        variant="largeSemibold"
        color={getColor(theme, location.pathname.toString(), path)}
      >
        {label}
      </Typography>
    </StyledLink>
  );
};

export default NavbarLink;
