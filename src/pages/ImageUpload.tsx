import styled from "@emotion/styled";
import { ChangeEvent, useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { uploadImage } from "../api/image";

function ImageUpload() {
  const [image, setImage] = useState<File>();
  const [PImage, setPImage] = useState<string>("/images/blank.png");
  const inputEl = useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    inputEl.current?.click();
  };
  const submitImage = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
      formData.append("name", "우갸갸");
      formData.append("price", 400 as any);

      uploadImage(formData);
    }
  };
  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File = (e.target.files as FileList)[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (e: any) => {
        setPImage(e.target.result);
      };
      setImage(file);
    } else {
      setImage(undefined);
      setPImage("/images/blank.png");
    }
  };
  return (
    <S.Wrapper>
      <Header />
      <S.Body>
        <form>
          <input type="file" accept="image/*" ref={inputEl} style={{ display: "none" }} onChange={changeImageHandler} />
          <img id="input-file" src={PImage} height={100} width={100} alt="" onClick={onButtonClick} />
          <br />
          <button onClick={submitImage} disabled={image ? false : true}>
            이미지 업로드
          </button>
        </form>
      </S.Body>
      <Footer />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled("div")``,
  Body: styled("div")`
    padding-top: 5rem;
  `,
};

export default ImageUpload;
