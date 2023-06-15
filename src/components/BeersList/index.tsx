import { IBeer } from "../../../types";
import BeersListItem from "./BeersListItem";

type Props = {
  beers: IBeer[];
};

export default function BeersList({ beers }: Props) {
  return (
    <div>
      {beers.map((beer: IBeer) => (
        <BeersListItem key={beer.id} beer={beer} />
      ))}
    </div>
  );
}
