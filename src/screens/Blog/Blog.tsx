import { useEffect, FC, useState } from "react";

import BlogList from "./BlogList";

export type Article = {
  imgUrl: string;
  title: string;
  readMoreUrl: string;
};

const Blog: FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const mediumUrl = process.env.REACT_APP_MEDIUM_URL;

  useEffect(() => {
    const doFetch = async () => {
      try {
        console.log("performing fetch");
        if(!mediumUrl) {
          console.log("no medium url!");
          return;
        }

        const res = await fetch(mediumUrl, {
          method: 'get',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          redirect: "follow"
        });

        const text = await res.text();
        const json = JSON.parse(text);
        const loadedArticles: Article[] = [];

        for (let i = 0; i < json.length; i++) {
          const item = json[i];
          const title = item.title;
          const readMoreUrl = item.link;
          
          const encodedContent = item.content_encoded;

          const parser = new DOMParser();
          const parsedContent = parser.parseFromString(
            encodedContent,
            "text/html"
          );

          const img = parsedContent.querySelector("img");
          if (!img) {
            console.log("no img");
            continue;
          }

          const imgUrl = img.getAttribute("src");
          if (!imgUrl) {
            console.log("no src");
            continue;
          }

          console.log({ title, link: readMoreUrl, imgUrl });

          loadedArticles.push({
            imgUrl,
            title,
            readMoreUrl: readMoreUrl
          })
        }

        setArticles(loadedArticles);
      } catch (error) { }
    };

    doFetch();
  }, []);

  return <BlogList articles={articles} />;
};

export default Blog;
