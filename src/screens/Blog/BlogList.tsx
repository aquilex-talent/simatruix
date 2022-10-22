import React, { FC } from "react";

import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ArticleCard, ArticleCardSkeleton } from "../../components";
import { Article } from "./Blog";

const ArticleColumn = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > :first-child": {
    marginTop: 80,
  },
  "& > *:not(:last-child)": {
    marginBottom: 40,
  },
});

interface BlogListProps {
  articles: Article[];
}

const BlogList: FC<BlogListProps> = ({ articles }) => {
  if (articles.length === 0) {
    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 1,
        }}
      >
        <ArticleColumn>
          <ArticleCardSkeleton />
          <ArticleCardSkeleton />
          <ArticleCardSkeleton />
          <ArticleCardSkeleton />
        </ArticleColumn>
      </Container>
    );
  }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: '100%',
        padding: 0,
      }}
    >
      <ArticleColumn>
        {articles.map((article) => (
          <ArticleCard
            key={article.title}
            imageUrl={article.imgUrl}
            title={article.title}
            readMoreUrl={article.readMoreUrl}
          />
        ))}
      </ArticleColumn>
    </Container>
  );
};

export default BlogList;
