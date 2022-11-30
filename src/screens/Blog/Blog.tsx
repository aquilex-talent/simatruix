import { useEffect, FC, useState } from "react";

import BlogList from "./BlogList";
import { Article } from "components/article-card/ArticleCard";

const Blog: FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const mediumUrl = process.env.REACT_APP_MEDIUM_PATH;

  useEffect(() => {
    const doFetch = async () => {
      if (!mediumUrl) {
        return
      }

      try {
        const res = await fetch(mediumUrl);
        const xml = await res.text();
        var node = new DOMParser().parseFromString(
          xml,
          "text/xml"
        ).documentElement;
        const articles = node.querySelectorAll("item");

        const loadedArticles: Article[] = [];

        for (let i = 0; i < articles.length; i++) {
          const titleElement = articles[i].querySelector("title");
          if (!titleElement || !titleElement.textContent) {
            continue;
          }

          const title = titleElement.textContent;

          const linkElement = articles[i].querySelector("link");
          if (!linkElement || !linkElement.textContent) {
            continue;
          }

          const readMoreUrl = linkElement.textContent;

          const article: Article = {
            title,
            readMoreUrl: readMoreUrl
          };

          loadedArticles.push(article);

          var encodedContent = articles[i].getElementsByTagNameNS(
            "*",
            "encoded"
          );

          if (!encodedContent || !encodedContent.item(0)) {
            continue;
          }

          var content = encodedContent.item(0);
          if (!content || !content.textContent) {
            continue;
          }

          const parser = new DOMParser();
          const parsedContent = parser.parseFromString(
            content.textContent,
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

          article.imgUrl = imgUrl;
        }

        setArticles(loadedArticles);
      } catch (error) { }
    };

    doFetch();
  }, [mediumUrl]);

  return <BlogList articles={articles} />;
};

export default Blog;
