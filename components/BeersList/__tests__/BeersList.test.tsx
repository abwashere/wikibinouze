import { render, screen } from "@testing-library/react";
import BeersList from "../";

const beers = [
  {
    id: 1,
    name: "ABeer",
    first_brewed: "1989",
    description: "A tasty one",
    image_url: "",
  },
  {
    id: 2,
    name: "Beber",
    first_brewed: "2010",
    description: "Not good",
    image_url: "",
  },
];

describe("BeersList component", () => {
  test("should render a list of 2 beers", () => {
    render(<BeersList beers={beers} />);

    expect(screen.queryAllByRole("listitem")).toHaveLength(2);
  });
});
