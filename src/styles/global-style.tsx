import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        *, *::before, *::after {
          box-sizing: border-box;
        }
      `}
    />
  );
}

export default GlobalStyle;
