import React from 'react';

import { InstaItem } from './InstaFeed';

interface InstaGridProps {
  items: InstaItem[];
}

const InstaGrid = ({ items }: InstaGridProps) => {
  return (
    <div style={{ width: '100%', display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "repeat(3,1fr)", rowGap: "2%", columnGap: "2%"}}>
      {items.map(item => (
        <img src={item.mediaUrl} style={{ display: 'block', objectFit: 'cover', width: '100%', height: '100%', aspectRatio: "1/ 1" }} />
      ))}
    </div>
  );
};

export default InstaGrid;
