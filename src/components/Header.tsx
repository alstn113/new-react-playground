import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <S.Wrapper>
      <div>
        <Link to="/">Main</Link>
      </div>
      <div>
        <Link to="/login">login</Link>
      </div>
      <div>
        <Link to="/register">register</Link>
      </div>
      <div>
        <Link to="/image">ImageUpload</Link>
      </div>
      <div>
        <Link to="/uitest">UI-Test</Link>
      </div>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    ${({ theme }) => theme.flexCenter}
    width: 100%;
    height: 5rem;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: red;
    div {
      margin: 2rem;
    }
  `,
};

export default Header;
