import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { flexCenter } from "../shared/styled";

function Header() {
  return (
    <S.Wrapper>
      <div>
        <Link to="/">Main</Link>
      </div>
      <div>
        <Link to="/sub">Sub</Link>
      </div>
    </S.Wrapper>
  );
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
