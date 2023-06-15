import { IBeer } from "../../types";
import BeersListItem from "./BeersListItem";
import { styled } from "@stitches/react";

type Props = {
  beers: IBeer[] | undefined;
};

const StyledContainer = styled("div", {
  width: "80%",
  margin: "auto",
});

export default function BeersList({ beers }: Props) {
  return (
    <StyledContainer>
      {beers?.map((beer: IBeer) => (
        <BeersListItem key={beer.id} beer={beer} />
      ))}
    </StyledContainer>
  );
}
