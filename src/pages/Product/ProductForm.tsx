import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { addProduct } from "../../api/product";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function ProductForm() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [image, setImage] = useState<File>();

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File = (e.target.files as FileList)[0];
    file ? setImage(file) : setImage(undefined);
  };

  const submitProduct = (event: any) => {
    event.preventDefault();
    if (!name || !price || !deliveryFee || !stock || !image) {
      return alert("모든 정보를 입력하세요");
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price.toString());
    formData.append("deliveryFee", deliveryFee.toString());
    formData.append("stock", stock.toString());
    formData.append("image", image);
    addProduct(formData as any);
  };
  return (
    <S.Wrapper>
      <Header />
      <S.Body>
        <form>
          <div>
            <label>name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>price</label>
            <input type="number" onChange={(e) => setPrice(e.target.valueAsNumber)} />
          </div>
          <div>
            <label>delivery fee</label>
            <input type="number" onChange={(e) => setDeliveryFee(e.target.valueAsNumber)} />
          </div>
          <div>
            <label>stock</label>
            <input type="number" onChange={(e) => setStock(e.target.valueAsNumber)} />
          </div>
          <div>
            <input type="file" accept="image/*" onChange={changeImageHandler} />
          </div>
          <button type="submit" onClick={submitProduct}>
            제품 생성
          </button>
        </form>
      </S.Body>
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

export default ProductForm;
