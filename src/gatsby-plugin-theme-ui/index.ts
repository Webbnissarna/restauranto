import { Theme } from "theme-ui";

const theme: Theme = {
  fonts: {
    body: "SeoulNamsan, Roboto, sans-serif",
    heading: "SeoulHangang, serif",
  },
  fontSizes: {
    h1: "3rem",
    h2: "2.25rem",
    h3: "1.5rem",
    base: "1rem",
    small: "0.75rem",
  },
  fontWeights: {
    base: 400,
    semibold: 500,
    bold: 600,
  },
  space: {
    "2xs": "0.125rem",
    xs: "0.25rem",
    sm: "0.5rem",
    md: "0.625rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.25rem",
  },
  radii: {
    "2xs": "0.125rem",
    default: "0.625rem",
  },
  colors: {
    backdrop: "#300",
    base: "white",
    phone: "#4FA0FF",
    inverted: "black",
    transparent: "#00000080",
  },
  shadows: {
    bottomRight: "2px 2px 2px rgba(0,0,0,0.75)",
    bottomRightLight: "2px 2px 2px rgba(0,0,0,0.25)",
    bottom: "0px 2px 2px #00000040",
  },
  borders: {
    transparentWhite: "1px solid rgba(255, 255, 255, 0.5)",
  },
  styles: {
    root: {
      h1: {
        fontFamily: "heading",
        fontSize: "h1",
        margin: 0,
        padding: 0,
      },

      h2: {
        fontFamily: "heading",
        fontSize: "h2",
        margin: 0,
        padding: 0,
      },

      h3: {
        fontFamily: "heading",
        fontSize: "h3",
        margin: 0,
        padding: 0,
      },
      p: {
        fontFamily: "body",
        fontSize: "base",
        margin: 0,
        padding: 0,
      },
      span: {
        fontFamily: "body",
        fontSize: "base",
        margin: 0,
        padding: 0,
      },
      li: {
        fontFamily: "body",
        margin: 0,
        padding: 0,
      },
    },
  },
};

export default theme;
