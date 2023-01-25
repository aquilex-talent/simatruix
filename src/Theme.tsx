import "main.css";

import { createTheme } from "@mui/material/styles";
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

declare module "@mui/material/styles" {
  interface TypographyVariants {
    large: TypographyStyleOptions;
    medeium: TypographyStyleOptions;
    caption: TypographyStyleOptions;
    normal: TypographyStyleOptions;
    small: TypographyStyleOptions;

    largeSemibold: TypographyStyleOptions;
    medeiumSemibold: TypographyStyleOptions;
    captionSemibold: TypographyStyleOptions;
    normalSemibold: TypographyStyleOptions;
    smallSemibold: TypographyStyleOptions;
  }

  interface TypographyVariantsOptions {
    large?: TypographyStyleOptions;
    medeium?: TypographyStyleOptions;
    caption?: TypographyStyleOptions;
    normal?: TypographyStyleOptions;
    small?: TypographyStyleOptions;

    largeSemibold?: TypographyStyleOptions;
    medeiumSemibold?: TypographyStyleOptions;
    captionSemibold?: TypographyStyleOptions;
    normalSemibold?: TypographyStyleOptions;
    smallSemibold?: TypographyStyleOptions;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    large: true;
    medeium: true;
    caption: true;
    normal: true;
    small: true;

    largeSemibold: true;
    medeiumSemibold: true;
    captionSemibold: true;
    normalSemibold: true;
    smallSemibold: true;
  }
}

/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
https://mui.com/material-ui/customization/breakpoints/

1rem = 16px 
*/

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontFamily: "Georgia",
      '@media (min-width:0px)': {
        fontSize: '2rem',
      },
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:900px)': {
        fontSize: '4rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '5rem',
      },
      fontWeight: "bold",
    },
    h2: {
      fontFamily: "Georgia",
      '@media (min-width:0px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:600px)': {
        fontSize: '2.25rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '3.75rem',
      },
      fontWeight: "bold",
    },
    h3: {
      fontFamily: "Georgia",
      '@media (min-width:0px)': {
        fontSize: '1rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1.875rem',
      },
      fontWeight: "bold",
    },
    h4: {
      '@media (min-width:0px)': {
        fontSize: '0.8rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.2rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1.5rem',
      },
      fontWeight: "bold",
    },
    large: {
      '@media (min-width:0px)': {
        fontSize: '0.8rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.2rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1.5rem',
      },
    },
    medeium: {
      '@media (min-width:0px)': {
        fontSize: '0.5rem',
      },
      '@media (min-width:600px)': {
        fontSize: '0.75rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1.25rem',
      },
    },
    caption: {
      '@media (min-width:0px)': {
        fontSize: '0.4rem',
      },
      '@media (min-width:600px)': {
        fontSize: '0.6rem',
      },
      '@media (min-width:900px)': {
        fontSize: '0.8rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1rem',
      },
      textTransform: "uppercase",
    },
    normal: {
      '@media (min-width:0px)': {
        fontSize: '0.4rem',
      },
      '@media (min-width:600px)': {
        fontSize: '0.6rem',
      },
      '@media (min-width:900px)': {
        fontSize: '0.8rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1rem',
      },
    },
    small: {
      '@media (min-width:0px)': {
        fontSize: '0.3rem',
      },
      '@media (min-width:600px)': {
        fontSize: '0.45rem',
      },
      '@media (min-width:900px)': {
        fontSize: '0.6rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '0.75rem',
      },
    },
    largeSemibold: {
      '@media (min-width:0px)': {
        fontSize: '0.8rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.2rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1.5rem',
      },
      fontWeight: "medium",
    },
    medeiumSemibold: {
      '@media (min-width:0px)': {
        fontSize: '0.5rem',
      },
      '@media (min-width:600px)': {
        fontSize: '0.75rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1.25rem',
      },
      fontWeight: "medium",
    },
    captionSemibold: {
      '@media (min-width:0px)': {
        fontSize: '0.4rem',
      },
      '@media (min-width:600px)': {
        fontSize: '0.6rem',
      },
      '@media (min-width:900px)': {
        fontSize: '0.8rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1rem',
      },
      fontWeight: "medium",
      textTransform: "uppercase",
    },
    normalSemibold: {
      '@media (min-width:0px)': {
        fontSize: '0.4rem',
      },
      '@media (min-width:600px)': {
        fontSize: '0.6rem',
      },
      '@media (min-width:900px)': {
        fontSize: '0.8rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1rem',
      },
      fontWeight: "medium",
    },
    smallSemibold: {
      '@media (min-width:0px)': {
        fontSize: '0.3rem',
      },
      '@media (min-width:600px)': {
        fontSize: '0.45rem',
      },
      '@media (min-width:900px)': {
        fontSize: '0.6rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '0.75rem',
      },
      fontWeight: "medium",
    },
  },
  palette: {
    background: {
      default: "#353535",
    },
    primary: {
      main: "#0F0F0F",
      light: "#353535",
      dark: "#000000",
    },
    secondary: {
      main: "#E9052F",
      light: "#FF5759",
      dark: "#AE0008",
    },
  },
});
