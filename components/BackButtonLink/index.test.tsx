import { render, screen } from "@testing-library/react";
import BackButtonLink from "./index";

describe("BackButtonLink component", () => {
  test("should render with a text", () => {
    render(<BackButtonLink text="Back" />);

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveTextContent("Back");
  });
});
