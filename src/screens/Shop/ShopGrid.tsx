import React from 'react';

import Grid from '@mui/material/Grid';

import { ShopCard, ShopCardProps } from 'components';

interface ShopGridProps {
  shopCards: ShopCardProps[];
}

const ShopGrid = ({ shopCards }: ShopGridProps) => {
  if (shopCards.length === 0) {
    return (
      <h1>Loading</h1>
    );
  }

  return (
    <div
      style={{
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 80
      }}
    >
      <Grid
        container
        rowSpacing={4}
        columnSpacing={{
          xs: 0,
          sm: 2,
          md: 3,
          lg: 4
        }}
        alignItems="center"
        justifyContent="center"
        paddingBottom={4}
      >
        {shopCards.map(shopCard => (
          <Grid item>
            <ShopCard
              imageUrl={shopCard.imageUrl}
              title={shopCard.title}
              body={shopCard.body}
              url={shopCard.url}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ShopGrid;
