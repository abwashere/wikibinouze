import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray: "gainsboro",
      darkGray: "#545454",
      lightOrange: "#ffedce",
    },
    fontSizes: {
      s: "0.8rem",
      m: "1rem",
      l: "1.5rem",
    },
  },
  media: {
    mobile: "(max-width: 639px)",
    laptop: "(min-width: 1024px)",
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
  },
});
