import React, { useEffect } from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

interface CarouselProps {
  children?: React.ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
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
      {children}
    </ul>
  );
};

export default Carousel;