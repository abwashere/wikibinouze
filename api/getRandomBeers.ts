import { useQuery } from "react-query";
import { getBeersUrl, getRandomBeerUrl } from "../utils/urls";
import axios from "axios";

const fetchRandomBeers = async () => {
  const { data: beer1 } = await axios.get(getRandomBeerUrl);
  const { data: beer2 } = await axios.get(getRandomBeerUrl);
  return [...beer1, ...beer2];
};

export const useGetRandomBeers = () => {
  return useQuery("randomBeers", fetchRandomBeers);
};
