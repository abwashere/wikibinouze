import Image from "next/image";
import Link from "next/link";
import { keyframes, styled } from "../../stitches.config";
import { IBeer } from "../../types";
import Date from "../Date";

const StyledContainer = styled("div", {
  borderRadius: 5,
  overflow: "hidden",
  border: "1px solid $gray",
  "&:hover": {
    backgroundColor: "$lightOrange",
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
  "@mobile": { padding: 5 },
  padding: 20,
  height: 230,

  "& h2": {
    fontSize: "$m",
    marginBottom: 0,
  },
  "& p": {
    fontSize: "$s",
    color: "#F84530",
  },
});

export default function BeerCard(props: IBeer) {
  const { id, name, image_url, first_brewed } = props;
  return (
    <Link href={`/beers/${id}`}>
      <StyledContainer>
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
      </StyledContainer>
    </Link>
  );
}
