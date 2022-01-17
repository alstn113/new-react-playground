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

const font = {
  small: css`
    font-size: 1.2rem;
    font-weight: 400;
  `,
  medium: css`
    font-size: 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 2rem;
    font-weight: 700;
  `,
};

const borderRadius = {
  small: css`
    border-radius: 0.5rem;
  `,
  medium: css`
    border-radius: 1rem;
  `,
  large: css`
    border-radius: 2rem;
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

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const theme = {
  color,
  font,
  borderRadius,
  media,
  flexCenter,
};

export default theme;
