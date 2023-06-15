import { DehydratedState, QueryClient, dehydrate, useQuery } from "react-query";
import { fetchBeers } from "../api";
import BeersList from "../src/components/BeersList";
import Carrousel from "../src/components/Carrousel";

export default function Home() {
  const { isLoading, isError, isSuccess, error, data } = useQuery(["beers"], fetchBeers);

  return isLoading ? (
    <span>Loading...</span>
  ) : isError ? (
    <span>Error from server</span>
  ) : (
    <div>
      <hr />
      <Carrousel beers={data} />

      <hr />
      <BeersList beers={data} />
    </div>
  );
}

export const getServerSideProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("beers", fetchBeers);
  return { props: { dehydratedState: dehydrate(queryClient) } };
};
