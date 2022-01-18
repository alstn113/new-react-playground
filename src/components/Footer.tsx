import styled from "styled-components";

function Footer() {
  return <S.Wrapper></S.Wrapper>;
}

const S = {
  Wrapper: styled.div`
    ${({ theme }) => theme.flexCenter}
    width: 100%;
    height: 5rem;
    background-color: red;
  `,
};

export default Footer;
