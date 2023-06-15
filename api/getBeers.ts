import axios from "axios";
import { useQuery } from "react-query";
import { IBeer } from "../types";
import { getBeersUrl } from "../utils/urls";

export const fetchBeers = async (): Promise<IBeer[]> => {
  const { data } = await axios.get(getBeersUrl);
  return data;
};

export const useGetBeers = () => {
  return useQuery(["beers"], fetchBeers);
};
