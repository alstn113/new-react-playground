import client from "../utils/axios";

export const signinLocal = async () => {
  const { data } = await client.post(`/auth/signin/local`);
  return data;
};

export const signupLocal = async () => {
  const { data } = await client.post(`/auth/signup/local`);
  return data;
};
