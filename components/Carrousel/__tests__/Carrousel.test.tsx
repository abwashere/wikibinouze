import { render, screen } from "@testing-library/react";
import Carrousel from "../";

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

describe("Carrousel component", () => {
  test("should render 2 links", () => {
    render(<Carrousel beers={beers} />);

    expect(screen.queryAllByRole("link")).toHaveLength(2);
  });
});
