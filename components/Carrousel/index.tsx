import { styled } from "../../stitches.config";
import { IBeer } from "../../types";
import BeerCard from "./BeerCard";

type Props = {
  beers: IBeer[] | undefined;
};

const StyledCarrousel = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 20,
  marginBottom: 20,
  minHeight: 230,
});

export default function Carrousel({ beers }: Props) {
  return (
    <StyledCarrousel>
      {beers?.map((beer: IBeer) => (
        <BeerCard key={beer.id} {...beer} />
      ))}
    </StyledCarrousel>
  );
}
