import { IBeer } from "../../types";
import Date from "../Date";
import { styled } from "../../stitches.config";

const StyledLink = styled("a", {
  textDecoration: "none",
  color: "black",
});

const StyledDiv = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 15px",
  borderRadius: 40,
  "&:hover": {
    backgroundColor: "orange",
  },
  fontSize: "$s",
});

type Props = {
  beer: IBeer;
};

export default function BeersListItem({ beer }: Props) {
  return (
    <StyledLink href={`/beers/${beer.id}`}>
      <StyledDiv>
        <span>{beer.name}</span>
        <Date date={beer.first_brewed} />
      </StyledDiv>
    </StyledLink>
  );
}
