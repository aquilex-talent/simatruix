import React from 'react';

import { Grid, GridSpacing } from '@mui/material';
import { InstaItem } from './InstaFeed';
import styled from '@emotion/styled';
import { ResponsiveStyleValue } from '@mui/system';

interface InstaGridProps {
  items: InstaItem[];
}

const StyledImage = styled.img`
display: block;
object-fit: cover;

@media (max-width: 678px) {
  width: 180px;
  height: 180px;
}

@media (min-width: 679px) and (max-width: 899px) {
  width: 210px;
  height: 210px;
}

@media (min-width: 900px) and (max-width: 1199px){
  width: 227px;
  height: 227px;
}

@media (min-width: 1200px) and (max-width: 1589px) {
  width: 230px;
  height: 230px;
}

@media (min-width: 1560px) {
  width: 280px;
  height: 280px;
}
`

const InstaGrid = ({ items }: InstaGridProps) => {
  const poop: ResponsiveStyleValue<GridSpacing> = { sm: 2, md: 1.57, lg: 1 }
  return (
    <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: 80 }}>
      <Grid
        container
        rowSpacing={poop}
        columnSpacing={poop}
        alignItems="center"
        justifyContent="center"
        paddingBottom={4}
      >
        {items.map(item => (
          <Grid item>
            <StyledImage src={item.mediaUrl} alt="insta item" />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default InstaGrid;
