import styled from "@emotion/styled";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import { useState } from "react";

function UITest() {
  const [modal, setModal] = useState(false);
  const onConfirm = () => {
    setModal(false);
  };
  const onCancel = () => {
    setModal(false);
  };
  return (
    <S.Wrapper>
      <Header />
      <S.Body>
        <br />
        <Button size="large">large</Button>
        <br />
        <Button size="medium">medium</Button>
        <br />
        <Button size="small">small</Button>
        <br />
        <Modal visible={modal} message="뭘 봐" onConfirm={onConfirm} onCancel={onCancel} />
        <Button size="small" onClick={() => setModal(true)}>
          Open Modal
        </Button>
        <br />
      </S.Body>
      <Footer />
    </S.Wrapper>
  );
}
const S = {
  Wrapper: styled("div")``,
  Body: styled("div")`
    ${({ theme }) => theme.flexCenter}
    flex-direction: column;
    padding-top: 5rem;
  `,
};

export default UITest;
