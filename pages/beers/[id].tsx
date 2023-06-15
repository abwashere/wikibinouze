import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchBeers } from "../../api";
import BackButton from "../../components/BackButton";
import Date from "../../components/Date";
import { IBeer } from "../../types";
import { styled } from "../../stitches.config";

const StyledContainer = styled("div", {
  display: "flex",
  gap: 20,
});

const StyledHeader = styled("h2", {
  margin: 0,
  fontSize: "$xl",
  fontWeight: 500,
});

const StyledDescription = styled("div", {
  marginTop: 20,
  color: "$darkGray",
  fontWeight: 300,
});

export default function BeerPage() {
  const router = useRouter();
  const id = Number(router.query.id);
  const { isError, data: beer } = useQuery(["beers"], fetchBeers, {
    select: (beers) => beers.find((beer: IBeer) => beer.id === id),
  });

  if (!beer) return <p>Loading...</p>;
  if (isError) return <p>Server error</p>;
  return (
    <div>
      <BackButton text="Back" />
      <StyledContainer>
        <div>
          <Image src={beer.image_url} alt="Picture of the beer" width={30} height={100} />
        </div>
        <div>
          <StyledHeader>{beer.name}</StyledHeader>
          <Date date={beer.first_brewed} />
          <StyledDescription>{beer.description}</StyledDescription>
        </div>
      </StyledContainer>
    </div>
  );
}
