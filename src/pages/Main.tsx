import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Main() {
  return (
    <S.Wrapper>
      <Header />
      <S.Body>Main</S.Body>
      <Footer />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div``,
  Body: styled.div`
    padding-top: 5rem;
  `,
};

export default Main;
