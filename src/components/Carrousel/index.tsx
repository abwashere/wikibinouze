"use-client";
import { useState } from "react";
import { IBeer } from "../../../types";
import { getRandomIndex } from "../../../utils/getRandomIndex";
import { useInterval } from "usehooks-ts";
import BeerCard from "./BeerCard";

type Props = {
  beers: IBeer[];
};

export default function Carrousel({ beers }: Props) {
  const [randomBeers, setRandomBeers] = useState([beers[0], beers[1]]);

  const getRandomBeers = (beers: IBeer[]): IBeer[] => {
    const firstBeer = beers[getRandomIndex(beers.length)];
    const secondBeer = beers[getRandomIndex(beers.length)];
    return firstBeer.id === secondBeer.id
      ? getRandomBeers(beers)
      : [firstBeer, secondBeer];
  };

  useInterval(() => {
    setRandomBeers(getRandomBeers(beers));
  }, 10000);

  return (
    <div>
      {randomBeers.map((beer: IBeer) => (
        <BeerCard key={beer.id} {...beer} />
      ))}
    </div>
  );
}
