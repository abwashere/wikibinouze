import { render, screen } from "@testing-library/react";
import BeerCard from "../BeerCard";

const beer = {
  id: 1,
  name: "ABeer",
  first_brewed: "1989",
  description: "A tasty one",
  image_url: "",
};

describe("BeerCard component", () => {
  test("should render a link, a header, a brew date and an image", () => {
    render(<BeerCard {...beer} />);

    const card = screen.getByRole("link");

    expect(screen.getByRole("heading", { name: "ABeer", level: 2 })).toBeInTheDocument();
    expect(card).toHaveTextContent(/1989View details/);
  });
});
