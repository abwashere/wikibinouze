import Link from "next/link";
import { IBeer } from "../../../types";

type Props = {
  beer: IBeer;
};

export default function BeersListItem({ beer }: Props) {
  return (
    <Link href={`/beers/${beer.id}`}>
      <div>
        <span>{beer.name}</span> <span>{beer.first_brewed}</span>
      </div>
    </Link>
  );
}
