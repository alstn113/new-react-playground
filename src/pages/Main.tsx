import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { authState } from "../store/auth";

const Main = () => {
  const setAuthValue = useSetRecoilState(authState);
  const axiosPrivate = useAxiosPrivate();
  const logoutHandler = async () => {
    await axiosPrivate.post("/auth/logout");
    setAuthValue({ access_token: "", isLoggedIn: false });
  };
  return (
    <Text>
      <div>Responsive Dropdown and Mega Menu</div>
      <div>using only HTML & CSS</div>
      <button onClick={logoutHandler}>로그아웃</button>
    </Text>
  );
};

const Text = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  padding: 0 30px;
  div {
    font-size: 45px;
    font-weight: 600;
  }
`;

export default Main;
