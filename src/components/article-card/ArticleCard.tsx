import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface ArticleCardProps {
  imageUrl: string;
  title: string;
  readMoreUrl: string;
}

const ResponsiveCard = styled(Card)(({ theme }) => ({
  background: "red",
  [theme.breakpoints.up("sm")]: {
    width: 600,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    minWidth: 300,
    borderRadius: 0,
  },
}));

const ArticleCard = (props: ArticleCardProps) => (
  <ResponsiveCard>
    <a href={props.readMoreUrl} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
      <CardActionArea style={{ background: "white" }}>
        <CardMedia
          component="img"
          height="160"
          image={props.imageUrl}
          alt="card image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="black"
            textAlign="center"
            fontWeight="bold"
          >
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </a>
  </ResponsiveCard>
);

export default ArticleCard;
