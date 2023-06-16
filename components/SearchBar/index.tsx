import { styled } from "@stitches/react";

export const SearchBar = styled("div", {
  marginBottom: 20,
  "& input": {
    width: "100%",
    height: "3rem",
    borderRadius: 5,
    border: "1px solid $gray",
    padding: "0px 10px",
    background: "url(/icons/search.svg) no-repeat center",
    backgroundPositionX: "1rem",
    backgroundSize: "2rem 2rem",
    paddingLeft: "4rem",
    "&:focus-within": {
      outline: "2px solid orange",
    },
    fontSize: "$m",
  },
});
