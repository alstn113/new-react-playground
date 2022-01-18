import { useQuery } from "react-query";
import client from "../utils/axios";

export const getProducts = async () => {
  const { data } = await client.get("products");
  return data;
};
export const useGetProducts = () => useQuery(["useGetProduct"], () => getProducts());
