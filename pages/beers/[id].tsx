import Image from "next/image";
import { QueryClient, dehydrate } from "react-query";
import { fetchAllBeers } from "../../api";
import { fetchBeerById, useGetBeersById } from "../../api/getBeerById";
import BackButtonLink from "../../components/BackButtonLink";
import Date from "../../components/Date";
import { styled } from "../../stitches.config";

type PageProps = {
  id: any;
};

const StyledContainer = styled("div", {
  display: "flex",
  gap: 20,

  "& h2": {
    margin: 0,
    fontSize: "$l",
    fontWeight: 500,
  },
  "& p.description": {
    marginTop: 20,
    color: "$darkGray",
    fontWeight: 300,
  },
});

export default function BeerPage({ id }: PageProps) {
  const { beer } = useGetBeersById(id);

  if (!beer) return <p>Loading...</p>;
  return (
    <div>
      <BackButtonLink text="Back" />
      <StyledContainer>
        <div>
          <Image src={beer.image_url} alt="Picture of the beer" width={30} height={100} />
        </div>
        <div>
          <h2>{beer.name}</h2>
          <Date date={beer.first_brewed} />
          <p className="description">{beer.description}</p>
        </div>
      </StyledContainer>
    </div>
  );
}

export const getStaticPaths = async () => {
  const beers = await fetchAllBeers();
  const paths = beers.map((beer) => ({
    params: { id: beer.id.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["beer", id], () => fetchBeerById(id));
  return { props: { dehydratedState: dehydrate(queryClient), id } };
};
