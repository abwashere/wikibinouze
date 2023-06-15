import { DehydratedState, QueryClient, dehydrate } from "react-query";
import { fetchBeers, fetchRandomBeers, useGetBeers, useGetRandomBeers } from "../api";
import BeersList from "../components/BeersList";
import Carrousel from "../components/Carrousel";

export default function Home() {
  const { isLoading, isError, data } = useGetBeers();
  const { isLoadingRandomBeers, randomBeers } = useGetRandomBeers();

  return isLoading || isLoadingRandomBeers ? (
    <span>Loading...</span>
  ) : isError ? (
    <span>Error from server</span>
  ) : (
    <div>
      <Carrousel beers={randomBeers} />
      <BeersList beers={data} />
    </div>
  );
}

export const getServerSideProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("beers", fetchBeers);
  await queryClient.prefetchQuery("randomBeers", fetchRandomBeers);
  return { props: { dehydratedState: dehydrate(queryClient) } };
};
