import axios from "axios";
import { useQuery } from "react-query";
import { IBeer } from "../types";
import { getTenBeersUrl } from "../utils/urls";

export const fetchBeersByName = async (beer_name: string): Promise<IBeer[]> => {
  if (beer_name) {
    const { data } = await axios.get(`${getTenBeersUrl}&beer_name=${beer_name}`);
    return data;
  }
  return [];
};

export const useGetBeersByName = (beer_name: string) => {
  const { isLoading: isLoadingSearchResults, data: searchedBeers } = useQuery(
    ["beers-search", beer_name],
    () => fetchBeersByName(beer_name)
  );
  return { isLoadingSearchResults, searchedBeers };
};
