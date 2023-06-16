import axios from "axios";
import { useQuery } from "react-query";
import { IBeer } from "../types";
import { getBeersUrl } from "../utils/urls";

export const fetchBeers = async (): Promise<IBeer[]> => {
  const { data } = await axios.get(getBeersUrl);
  return data;
};

export const useGetBeers = () => {
  const {
    isLoading: isLoadingBeers,
    isError,
    data: beers,
  } = useQuery(["beers"], fetchBeers);
  return { isLoadingBeers, isError, beers };
};
