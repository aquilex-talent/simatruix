import { styled } from "@mui/material";
import CircularProgress, { CircularProgressProps } from "@mui/material/CircularProgress";

const RedSpinner = styled(CircularProgress)<CircularProgressProps>(
  ({ theme }) => ({
    color: theme.palette.secondary.main,
  })
);

export default RedSpinner;
