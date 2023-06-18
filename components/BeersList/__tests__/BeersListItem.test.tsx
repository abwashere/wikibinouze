import { render, screen } from "@testing-library/react";
import BeersListItem from "../BeersListItem";

const beer = {
  id: 1,
  name: "ABeer",
  first_brewed: "1989",
  description: "A tasty one",
  image_url: "",
};

describe("BeersListItem component", () => {
  test("should render with a beer name and a date", () => {
    render(<BeersListItem beer={beer} />);

    expect(screen.getByRole("link")).toHaveTextContent("ABeer1989");
  });
});
