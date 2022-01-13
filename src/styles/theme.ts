import { css } from "@emotion/react";

const color = {
  white: "#ffffff",
  black: "#000000",
  gray0: "#e9ecef",
  gray1: "#ced4da",
  gray2: "#868e96",
  orange0: "#ffd8a8",
  orange1: "#ffa94d",
  orange2: "#fd7e14",
};

const typography = {
  title: css`
    font-size: 4rem;
    font-weight: 800;
  `,
  subtitle: css`
    font-size: 2.5rem;
    font-weight: 600;
  `,
  label: css`
    font-size: 1rem;
    font-weight: 400;
    color: red;
  `,
  description: css`
    font-size: 1rem;
    font-weight: 400;
  `,
};

const media = {
  custom: (maxWidth: number): string => {
    return `screen and (max-width: ${maxWidth}px)`;
  },
  labtop_L: "screen and (max-width: 1440px)",
  labtop_S: "screen and (max-width: 768px)",
  tablet: "screen and (max-width: 1100px)",
  mobile: "screen and (max-width: 500px)",
};

const theme = {
  color,
  typography,
  media,
};

export default theme;
