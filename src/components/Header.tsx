import styled from "@emotion/styled";
import { flexCenter } from "../shared/styled";

function Header() {
  return <S.Wrapper></S.Wrapper>;
}

const S = {
  Wrapper: styled("div")`
    ${flexCenter};
    width: 100%;
    height: 5rem;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: red;
  `,
};

export default Header;
