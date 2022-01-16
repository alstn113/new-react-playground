import client from "../utils/axios";

export const uploadImage = async (image: any) => {
  const { data } = await client.post(`/products`, image);
  return data;
};
