import styled from "styled-components";
import Button from "./Button";

export interface ModalProps {
  visible: boolean;
  message?: string;
  onConfirm: Function;
  onCancel: Function;
}

const Modal = ({ visible, message, onConfirm, onCancel }: ModalProps) => {
  if (!visible) return null;
  return (
    <div>
      <S.Wrapper>
        <S.Modal>
          <div className="message">{message}</div>
          <div className="button">
            <Button className="confirm" size="small" onClick={() => onConfirm()}>
              CONFIRM
            </Button>
            <Button className="cancel" size="small" onClick={() => onCancel()}>
              CANCEL
            </Button>
          </div>
        </S.Modal>
      </S.Wrapper>
      <S.Background />
    </div>
  );
};

const S = {
  Wrapper: styled.div`
    ${({ theme }) => theme.flexCenter}
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
  `,
  Modal: styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    ${({ theme }) => theme.borderRadius.medium}
    background-color: white;
    width: 25rem;
    padding: 1rem;
    .message {
      ${({ theme }) => theme.flexCenter}
      ${({ theme }) => theme.font.large}
      margin-top:2rem;
      margin-bottom: 2rem;
    }
    .button {
      display: flex;
      justify-content: flex-end;
      button {
        margin-left: 1rem;
      }
      .confirm {
        background: #5a5acf;
      }
      .confirm:hover {
        background: #4646bd;
      }
      .cancel {
        background: #c97d7d;
      }
      .cancel:hover {
        background: #c96f6f;
      }
    }
  `,
  Background: styled("div")`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 100;
  `,
};
export default Modal;
