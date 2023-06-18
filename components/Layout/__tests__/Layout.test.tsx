import { render, screen } from "@testing-library/react";
import Layout from "../";

describe("Layout component", () => {
  test("should render the header - Wikibinouze", () => {
    render(
      <Layout>
        <div>Layout</div>
      </Layout>
    );
    expect(screen.getByRole("heading", { level: 1, name: "Wikibinouze" }))
      .toBeInTheDocument;
  });
});
