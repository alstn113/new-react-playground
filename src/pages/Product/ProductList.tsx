import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ProductList = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Body>
        <S.ProductList>
          <thead>
            <tr>
              <th>상품 번호</th>
              <th>이름</th>
              <th>가격</th>
              <th>배송비</th>
              <th>재고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem</td>
              <td>Ipsum</td>
              <td>Dolor</td>
              <td>Ipsum</td>
              <td>Dolor</td>
            </tr>
            <tr>
              <td>Lorem</td>
              <td>Ipsum</td>
              <td>Dolor</td>
              <td>Ipsum</td>
              <td>Dolor</td>
            </tr>
            <tr>
              <td>Lorem</td>
              <td>Ipsum</td>
              <td>Dolor</td>
              <td>Ipsum</td>
              <td>Dolor</td>
            </tr>
            <tr>
              <td>Lorem</td>
              <td>Ipsum</td>
              <td>Dolor</td>
              <td>Ipsum</td>
              <td>Dolor</td>
            </tr>
          </tbody>
        </S.ProductList>
      </S.Body>
      <Footer />
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div``,
  Body: styled.div`
    padding-top: 5rem;
  `,
  ProductList: styled.table`
    width: 100%;
    border: 1px solid #444444;
    border-collapse: collapse;
    th,
    td {
      border: 1px solid #444444;
      padding: 1rem;
      vertical-align: middle;
      text-align: center;
    }
  `,
};

export default ProductList;
