import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGetProducts } from "../../api/product";
import queryString from "query-string";
const ProductList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = queryString.parse(location.search);
  const { data } = useGetProducts(query);

  const test = (order: string): any => {
    navigate(`/product?order=${order}`);
  };

  return (
    <S.Wrapper>
      <S.Body>
        <Link to="/product/create">create-product</Link>
        <button onClick={() => test("priceAsc")}>priceAsc</button>
        <button onClick={() => test("priceDesc")}>priceDesc</button>
        <button onClick={() => test("default")}>default</button>

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
            {data?.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.deliveryFee}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </S.ProductList>
      </S.Body>
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
