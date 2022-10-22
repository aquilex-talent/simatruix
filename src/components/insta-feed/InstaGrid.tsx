import React from 'react';

import { Grid } from '@mui/material';
import { InstaItem } from './InstaFeed';
import styled from '@emotion/styled';

interface InstaGridProps {
  items: InstaItem[];
}

const StyledImage = styled.img`
display: block;
object-fit: cover;

@media (max-width: 599px) {
  width: 200px;
  height: 200px;
}

@media (min-width: 600px) and (max-width: 899px) {
  width: 250px;
  height: 250px;
}

@media (min-width: 900px){
  width: 300px;
  height: 300px;
}
`

const InstaGrid = ({ items }: InstaGridProps) => {
  return (
    <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: 80 }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
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
