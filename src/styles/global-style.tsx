import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle` 
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'BMEULJIRO';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/BMEULJIRO.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
`;
