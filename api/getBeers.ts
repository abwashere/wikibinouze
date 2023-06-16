import axios from "axios";
import { useQuery } from "react-query";
import { IBeer } from "../types";
import { API_BASE_URL, getTenBeersUrl } from "../utils/urls";

export const fetchBeers = async (): Promise<IBeer[]> => {
  const { data } = await axios.get(getTenBeersUrl);
  return data;
};

export const fetchAllBeers = async (): Promise<IBeer[]> => {
  const { data } = await axios.get(API_BASE_URL);
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
