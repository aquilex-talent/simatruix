import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

const Carousel = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();

  const handleNext = () => {
    if (activePageIndex === pages.length - 1) {
      goTo(0);
      return;
    }

    next();
  }

  const handlePrev = () => {
    if (activePageIndex === 0) {
      goTo(pages.length - 1);
      return;
    }

    prev();
  }

  return (
    <div style={{ width: '100%' }}>
      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory'
        }}
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <li
            style={{
              backgroundColor: 'aqua',
              fontSize: '50px',
              width: '250px',
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
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;