import { IBeer } from "../../types";
import BeersListItem from "./BeersListItem";
import { styled } from "@stitches/react";

type Props = {
  beers: IBeer[] | undefined;
};

const StyledContainer = styled("ul", {
  width: "80%",
  margin: "auto",
  paddingInlineStart: 0,
  "& li": {
    listStyle: "none",
  },
});

export default function BeersList({ beers }: Props) {
  return (
    <StyledContainer>
      {beers?.map((beer: IBeer) => (
        <li key={beer.id}>
          <BeersListItem beer={beer} />
        </li>
      ))}
    </StyledContainer>
  );
}
