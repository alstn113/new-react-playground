import { atom } from "recoil";

interface authStateType {
  isLoggedIn: boolean;
  access_token: string;
}

export const authState = atom<authStateType>({
  key: "auth",
  default: {
    isLoggedIn: false,
    access_token: "",
  },
});
