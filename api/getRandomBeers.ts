import axios from "axios";
import { useQuery } from "react-query";
import { IBeer } from "../types";
import { getRandomBeerUrl } from "../utils/urls";

export const fetchRandomBeers = async (): Promise<IBeer[]> => {
  const { data: beer1 } = await axios.get(getRandomBeerUrl);
  const { data: beer2 } = await axios.get(getRandomBeerUrl);
  return [...beer1, ...beer2];
};

export const useGetRandomBeers = () => {
  const { isLoading: isLoadingRandomBeers, data: randomBeers } = useQuery(
    "randomBeers",
    fetchRandomBeers,
    { refetchInterval: 10000 }
  );
  return { isLoadingRandomBeers, randomBeers };
};
