import { useEffect, FC, useState } from "react";

import BlogList from "./BlogList";

export type Article = {
  imgUrl?: string;
  title: string;
  readMoreUrl: string;
};

const Blog: FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const doFetch = async () => {
      try{
        const res = await fetch("/@fedor.selenskiy");
        const html = await res.text();
        
        var node = new DOMParser().parseFromString(
          html,
          "text/html"
        ).documentElement;

        const articles = node.querySelectorAll("article");

        console.log("number of articles: ", articles.length);

        const fetchedArticles: Article[] = [];

        for (let i = 0; i < articles.length; i++) {
          const article = articles[i];

          const title = article.querySelector("h2");
          if(!title) {
            continue;
          }

          const urlElement = article.querySelector("a[aria-label='Post Preview Reading Time']");
          if(!urlElement) {
            continue;
          }

          const url = urlElement.getAttribute("href");
          if(!url) {
            continue;
          }

          const thisArticle: Article = {
            title: title.innerText,
            readMoreUrl: url
          };

          console.log(thisArticle);

          const img = article.querySelector("img");
          if(!!img) {
            thisArticle.imgUrl = img.src;
          }

          fetchedArticles.push(thisArticle);

        }

        setArticles(fetchedArticles);

      } catch(error) {
        console.log("ERROR: ", error);
      }
      
    }

    doFetch();
  }, []);

  return <BlogList articles={articles} />;
};

export default Blog;
