import React, { useEffect, useState } from 'react';
import InstaGrid from './InstaGrid';

export interface InstaItem {
  permalink: string;
  mediaUrl: string;
}

const InstaFeed = () => {
  const [instaItems, setInstaItems] = useState<InstaItem[]>([]);

  const instaUrl = "https://v1.nocodeapi.com/ferrouskid/instagram/LnhwHoJFqgJvTbbS";

  useEffect(() => {
    const doFetch = async () => {
      const res = await fetch(instaUrl, {
        method: 'get',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        redirect: "follow"
      });

      const text = await res.text();
      const json = JSON.parse(text).data;

      const loadedInstaItems: InstaItem[] = [];

      for (let i = 0; i < json.length && i < 9; i++) {
        const item = json[i];
        const permalink = item.permalink;
        const mediaUrl = item.media_url;

        loadedInstaItems.push({permalink, mediaUrl});

        console.log({ permalink, mediaUrl });
      }

      setInstaItems(loadedInstaItems);
    };

    doFetch();

  }, []);

  return (
    <InstaGrid items={instaItems} />
  );
}

export default InstaFeed;
