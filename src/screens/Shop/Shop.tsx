import React, { FC } from 'react';


import img1 from 'static/images/shop-card-img-1.png';
import img2 from 'static/images/shop-card-img-2.png';
import img3 from 'static/images/shop-card-img-3.png';
import img4 from 'static/images/shop-card-img-4.png';

import { ShopCardProps } from 'components';

import ShopGrid from './ShopGrid';

const Shop: FC = () => {
  const shopCards: ShopCardProps[] = [
    {
      imageUrl: img1,
      title: "Online Coaching",
      body: "Personalised online coaching.",
      url: "/shop/online_coaching",
    },
    {
      imageUrl: img2,
      title: "App Membership",
      body: "Access to huge exercise library and a 3 month programme.",
      url: "/shop/app_membership",
    },
    {
      imageUrl: img3,
      title: "PT Sessions",
      body: "Full access to app + in person training sesisons",
      url: "/shop/sessions",
    },
    {
      imageUrl: img4,
      title: "Strength Camp",
      body: "32 week strength programme.",
      url: "/shop/strength_camp",
    },
  ];

  return (
    <ShopGrid shopCards={shopCards} />
  );
};

export default Shop;
