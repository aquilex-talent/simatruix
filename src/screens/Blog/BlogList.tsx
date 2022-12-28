import React, { FC } from "react";

import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ArticleCard, ArticleCardSkeleton } from "../../components";
import { Article } from "components/article-card/ArticleCard";

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
            <>
              <ArticleCardSkeleton />
              <ArticleCardSkeleton />
              <ArticleCardSkeleton />
              <ArticleCardSkeleton />
            </>
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
