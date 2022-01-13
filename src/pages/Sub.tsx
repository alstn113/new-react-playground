import styled from "@emotion/styled";
import { useGetReviews } from "../api/review";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Sub() {
  const { data, isLoading } = useGetReviews();
  return (
    <S.Wrapper>
      <Header />
      <S.Body>{isLoading ? "loading..." : data?.map((review) => <div key={review?.id}>{review.title}</div>)}</S.Body>
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

export default Sub;
