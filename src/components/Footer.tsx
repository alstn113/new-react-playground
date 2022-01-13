import styled from "@emotion/styled";
import { flexCenter } from "../shared/styled";

function Footer() {
  return <S.Wrapper></S.Wrapper>;
}

const S = {
  Wrapper: styled("div")`
    ${flexCenter}
    width: 100%;
    height: 5rem;
    background-color: red;
  `,
};

export default Footer;
