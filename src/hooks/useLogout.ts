import { useSetRecoilState } from "recoil";
import { authState } from "../store/auth";
import useAxiosPrivate from "./useAxiosPrivate";

const useLogout = () => {
  const setAuthValue = useSetRecoilState(authState);
  const axiosPrivate = useAxiosPrivate();

  const logout = async () => {
    try {
      await axiosPrivate.post("/auth/logout");
      setAuthValue({ access_token: "", isLoggedIn: false });
    } catch (err) {
      console.log(err);
    }
  };
  return logout;
};

export default useLogout;
