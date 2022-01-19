import { useQuery } from "react-query";
import { IProduct } from "../shared/types";
import client from "../utils/axios";

interface ProductParams {
  page?: number;
  size?: number;
  order?: string;
}

export const getProducts = async (params: ProductParams): Promise<IProduct[]> => {
  const { data } = await client.get("products", { params });
  return data;
};
export const useGetProducts = (params: ProductParams) => useQuery(["useGetProduct", params], () => getProducts(params));

export const addProduct = async (product: IProduct) => {
  const { data } = await client.post("products", product);
  return data;
};
