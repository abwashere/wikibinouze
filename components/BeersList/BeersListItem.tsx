import { IBeer } from "../../types";
import Date from "../Date";
import { keyframes, styled } from "../../stitches.config";
import Link from "next/link";

const bounce = keyframes({
  "0%": { transform: "translateY(0x)" },
  "30%": { transform: "translateY(-3px)" },
  "50%": { transform: "translateY(3px)" },
  "100%": { transform: "translateY(0px)" },
});

const StyledDiv = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 15px",
  marginBottom: 10,
  borderRadius: 5,
  "&:hover": {
    backgroundColor: "$lightOrange",
    animation: `${bounce} 700ms`,
  },
  fontSize: "$s",
});

type Props = {
  beer: IBeer;
};

export default function BeersListItem({ beer }: Props) {
  return (
    <Link href={`/beers/${beer.id}`}>
      <StyledDiv>
        <span>{beer.name}</span>
        <Date date={beer.first_brewed} />
      </StyledDiv>
    </Link>
  );
}