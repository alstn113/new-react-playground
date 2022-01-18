import client from "../utils/axios";

export const signinLocal = async () => {
  const { data } = await client.post(`/auth/signin/local`, { email: "alstn113", password: "alstn123" });
  return data;
};

export const signupLocal = async () => {
  const { data } = await client.post(`/auth/signup/local`);
  return data;
};
