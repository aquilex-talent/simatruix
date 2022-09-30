import { Box, Typography } from '@mui/material';
import React from 'react';

interface ShopSectionProps {
  img: string;
  title: string;
  subtitle: string;
  body: string;
  children: React.ReactNode;
}

const ShopSection = ({ img, title, subtitle, body, children }: ShopSectionProps) => {
  return (
    <Box display="flex" mt="64px" height="calc(100vh - 64px);">
      <img src={img} style={{ height: '100%' }} />
      <Box display="flex" flexDirection="column" alignItems="center" width="80%" maxWidth={500} mt={8} ml="auto" mr="auto">
        <Typography variant="h2" textAlign="center" sx={{ color: '#FFBA08' }}>{title}</Typography>
        <Typography variant="h3" textAlign="center" mt={1} sx={{ color: '#fff' }}>{subtitle}</Typography>
        <Typography variant="body1" textAlign="center" mt={6} sx={{ color: '#fff'}}>{body}</Typography>
        {children}
      </Box>
    </Box>
  );
}

export default ShopSection;
