import { useQuery } from "react-query";
import client from "../utils/axios";
import { IReview } from "../shared/types";

const getReview = async (id: number): Promise<IReview> => {
  const { data } = await client.get(`reviews/${id}`);
  return data;
};
export const useGetReview = (id: number) => useQuery(["useGetReviews", id], () => getReview(id));

const getReviews = async (): Promise<IReview[]> => {
  const { data } = await client.get("reviews");
  return data;
};
export const useGetReviews = () => useQuery(["useGetReviews"], () => getReviews());
