import { atom } from "recoil";

export const user = atom({
  key: "user",
  default: {
    userId: 0,
    email: "",
  },
});
