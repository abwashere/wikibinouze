import { useState } from "react";
import { DehydratedState, QueryClient, dehydrate } from "react-query";
import {
  fetchBeers,
  fetchRandomBeers,
  useGetBeers,
  useGetBeersByName,
  useGetRandomBeers,
} from "../api";
import BeersList from "../components/BeersList";
import Carrousel from "../components/Carrousel";
import { SearchBar } from "../components/SearchBar";
import useDebounce from "../hooks/useDebounce";

export default function Home() {
  const [inputVal, setInputVal] = useState("");

  const { isLoadingBeers, isError, beers } = useGetBeers();
  const { isLoadingRandomBeers, randomBeers } = useGetRandomBeers();

  const debouncedSearchValue = useDebounce(inputVal);
  const { searchedBeers } = useGetBeersByName(debouncedSearchValue);

  return isLoadingBeers || isLoadingRandomBeers ? (
    <span>Loading...</span>
  ) : isError ? (
    <span>Error from server</span>
  ) : (
    <div>
      <Carrousel beers={randomBeers} />
      <SearchBar style={{ marginBottom: 20 }}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value.toLowerCase())}
        />
        {searchedBeers?.length ? <>{searchedBeers[0].name}</> : null}
      </SearchBar>
      {debouncedSearchValue === "" ? (
        <BeersList beers={beers} />
      ) : searchedBeers?.length ? (
        <BeersList beers={searchedBeers} />
      ) : (
        <div style={{ textAlign: "center" }}>No data found</div>
      )}
    </div>
  );
}

export const getServerSideProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("beers", () => fetchBeers());
  await queryClient.prefetchQuery("randomBeers", fetchRandomBeers);
  return { props: { dehydratedState: dehydrate(queryClient) } };
};
