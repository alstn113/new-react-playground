import "styled-components";
import { css } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      white: string;
      black: string;
      gray0: string;
      gray1: string;
      gray2: string;
      orange0: string;
      orange1: string;
      orange2: string;
    };
    font: {
      small: css;
      medium: css;
      large: css;
    };
    borderRadius: {
      large: css;
      medium: css;
      small: css;
    };
    media: {
      custom: (maxWidth: number) => string;
      labtop_L: string;
      labtop_S: string;
      tablet: string;
      mobile: string;
    };
    flexCenter: css;
  }
}
