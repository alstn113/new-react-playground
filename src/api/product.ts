import { useQuery } from "react-query";
import { IProduct } from "../shared/types";
import client from "../utils/axios";

export const getProducts = async (): Promise<IProduct> => {
  const { data } = await client.get("products");
  return data;
};
export const useGetProducts = () => useQuery(["useGetProduct"], () => getProducts());

export const addProduct = async (product: IProduct) => {
  const { data } = await client.post("products", product);
  return data;
};
