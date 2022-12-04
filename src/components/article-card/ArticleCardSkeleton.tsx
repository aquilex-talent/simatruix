import { styled } from "@mui/material/styles";

import Skeleton, { SkeletonProps } from "@mui/material/Skeleton";

const ResponsiveCardSkeleton = styled(Skeleton)<SkeletonProps>(({ theme }) => ({
  background: theme.palette.primary.main,
  [theme.breakpoints.up("sm")]: {
    width: 600,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    minWidth: 300,
    borderRadius: 0,
  },
}));

const ArticleCardSkeleton = () => (
  <ResponsiveCardSkeleton variant="rectangular" />
);

export default ArticleCardSkeleton;
