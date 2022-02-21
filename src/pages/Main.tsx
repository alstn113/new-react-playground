import styled from "styled-components";
import useLogout from "../hooks/useLogout";

const Main = () => {
  const logout = useLogout();
  const signOut = async () => {
    await logout();
  };
  return (
    <Text>
      <div>Responsive Dropdown and Mega Menu</div>
      <div>using only HTML & CSS</div>
      <button onClick={signOut}>로그아웃</button>
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
