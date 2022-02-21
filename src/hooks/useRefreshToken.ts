import { useSetRecoilState } from "recoil";
import { authState } from "../store/auth";
import client from "../utils/axios";

const useRefreshToken = () => {
  const setAuthValue = useSetRecoilState(authState);

  const refresh = async () => {
    const res = await client.post("/auth/refresh");
    setAuthValue((prev) => {
      console.log(prev);
      console.log(res.data.access_token);
      return { ...prev, access_token: res.data.access_token };
    });
    return res.data.access_token;
  };
  return refresh;
};

export default useRefreshToken;
