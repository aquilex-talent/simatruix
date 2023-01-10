import React from 'react';

import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { ResponsiveCard } from './ResponsiveCard';

export type Article = {
  imgUrl?: string;
  title: string;
  readMoreUrl: string;
};

export interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => (
  <ResponsiveCard>
    <a
      href={article.readMoreUrl}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <CardActionArea style={{ background: "white" }}>
        {article.imgUrl &&
          <CardMedia
            component="img"
            height="160"
            image={article.imgUrl}
            alt="card image"
          />}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="black"
            textAlign="center"
            fontWeight="bold"
          >
            {article.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </a>
  </ResponsiveCard>
);

export default ArticleCard;
