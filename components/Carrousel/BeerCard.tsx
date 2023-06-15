import Image from "next/image";
import { keyframes, styled } from "../../stitches.config";
import { IBeer } from "../../types";
import Date from "../Date";

const StyledLink = styled("a", {
  border: "$gray 1px solid",
  borderRadius: 5,
  overflow: "hidden",
  textDecoration: "none",
  color: "black",
  "&:hover": {
    backgroundColor: "#ffedce",
  },
});

const slide = keyframes({
  "0%": { transform: "translateX(100px)", opacity: 0 },
  "20%": { transform: "translateX(0)", opacity: 1 },
  "100%": { transform: "translateX(0)", opacity: 1 },
});

const AnimatedDiv = styled("div", {
  animation: `${slide} 7000ms`,
  display: "flex",
  flexDirection: "column",
  padding: 10,
  height: 230,

  "& h2": {
    fontSize: "$m",
    marginBottom: 0,
  },
  "& p": {
    fontSize: "$s",
    color: "orange",
  },
});

export default function BeerCard(props: IBeer) {
  const { id, name, image_url, first_brewed } = props;
  return (
    <StyledLink href={`/beers/${id}`}>
      <AnimatedDiv>
        <div style={{ flexGrow: 1 }}>
          {image_url && (
            <Image
              src={image_url}
              alt="Picture of the beer"
              quality={50}
              width={30}
              height={80}
            />
          )}
          <div>
            <h2>{name}</h2>
            <Date date={first_brewed} />
          </div>
        </div>
        <p>View details</p>
      </AnimatedDiv>
    </StyledLink>
  );
}
