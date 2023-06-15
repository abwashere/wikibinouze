import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchBeers } from "../../api";
import BackButton from "../../src/components/BackButton";
import { IBeer } from "../../types";

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
      <div>
        <div>
          <Image
            src={beer.image_url}
            alt="Picture of the beer"
            width={500}
            height={500}
          />
        </div>
        <div>
          <h2>{beer.name}</h2>
          <p>{beer.first_brewed}</p>
          <p>{beer.description}</p>
        </div>
      </div>
    </div>
  );
}
