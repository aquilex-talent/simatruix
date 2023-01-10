import React from 'react';

import { SxProps, Theme } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FilterNoneIcon from '@mui/icons-material/FilterNone';

import { InstaItem } from 'components';

interface MediaItemProps {
  item: InstaItem
}

const iconStyle: SxProps<Theme> = {
  color: 'white',
  width: "10%",
  height: "10%",
  position: "absolute",
  top: "10%",
  right: "10%"
}

const MediaItem = ({ item }: MediaItemProps) => {
  const imageUrl = !!item.thumbnailUrl ? item.thumbnailUrl : item.mediaUrl;
  return (
    <div
      style={{
        display: "inline-block",
        position: "relative"
      }}>
      <a
        href={item.permalink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={imageUrl}
          alt="insta-item"
          style={{
            display: 'block',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            aspectRatio: "1/ 1"
          }}
        />
        {item.mediaType === "VIDEO" &&
          <PlayArrowIcon sx={iconStyle} />
        }
        {item.mediaType === "CAROUSEL_ALBUM" &&
          <FilterNoneIcon sx={iconStyle} />
        }
      </a>
    </div>
  );
}

export default MediaItem;
