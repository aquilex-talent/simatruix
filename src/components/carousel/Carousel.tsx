import React, { useEffect } from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

const Carousel = () => {
  const { scrollRef, pages, activePageIndex, next, goTo } = useSnapCarousel();

  useEffect(() => {
    setTimeout(() => {
      if (activePageIndex === pages.length - 1) {
        goTo(0);
        return;
      }

      next();
    }, 3000);
  }, [activePageIndex, pages, goTo, next]);

  return (
    <ul
      ref={scrollRef}
      style={{
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
        scrollSnapType: 'x mandatory'
      }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <li
          style={{
            backgroundColor: 'aqua',
            fontSize: '50px',
            width: '100%',
            height: '250px',
            flexShrink: 0,
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Item {i}
        </li>
      ))}
    </ul>
  );
};

export default Carousel;