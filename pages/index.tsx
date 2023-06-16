import { useState } from "react";
import { useGetBeers, useGetBeersByName, useGetRandomBeers } from "../api";
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
          aria-label="searchInput"
          placeholder="Search"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value.toLowerCase())}
        />
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
