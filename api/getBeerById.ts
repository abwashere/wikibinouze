import axios from "axios";
import { useQuery } from "react-query";
import { IBeer } from "../types";
import { API_BASE_URL } from "../utils/urls";

export const fetchBeerById = async (id: string): Promise<IBeer> => {
  const { data } = await axios.get(`${API_BASE_URL}/${id}`);
  return data[0];
};

export const useGetBeersById = (id: string) => {
  const { isError, data: beer } = useQuery(["beer", id], () => fetchBeerById(id));
  return { beer, isError };
};
