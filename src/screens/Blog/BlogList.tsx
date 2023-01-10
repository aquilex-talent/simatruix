import React, { FC } from "react";

import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Article, ArticleCard, ArticleCardSkeleton, EmptyArticleCard } from "components";

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
  loaded: boolean;
  articles: Article[];
}

const BlogList: FC<BlogListProps> = ({ loaded, articles }) => {
  if (!loaded) {
    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: '100%',
          padding: 0,
          marginBottom: 2,
        }}
      >
        <ArticleColumn>
          <ArticleCardSkeleton />
          <ArticleCardSkeleton />
          <ArticleCardSkeleton />
          <ArticleCardSkeleton />
        </ArticleColumn>
      </Container>
    )
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: '100%',
        padding: 0,
        marginBottom: 2,
      }}
    >
      <ArticleColumn>
        {articles.length === 0 ? (
          <EmptyArticleCard />
        ) : (
          articles.map((article) => (
            <ArticleCard
              key={article.title}
              article={article}
            />
          ))
        )
        }
      </ArticleColumn>
    </Container>
  );
};

export default BlogList;
