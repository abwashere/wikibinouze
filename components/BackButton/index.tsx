"use-client";
import Image from "next/image";
import { styled } from "../../stitches.config";

type Props = { text: string };

const StyledLink = styled("a", {
  display: "flex",
  alignItems: "center",
  gap: 20,
  marginBottom: 20,
  marginLeft: -10,
  padding: "0px 10px",
  width: "fit-content",
  borderRadius: 10,
  fontWeight: 500,
  color: "orange",
  "&:hover": {
    background: "orange",
    color: "white",
  },
});

export default function BackButton({ text }: Props) {
  return (
    <StyledLink data-testid="back-button-div" href="/">
      <Image src="/icons/arrow_back.svg" alt="Back arrow icon" width={25} height={25} />
      <p>{text}</p>
    </StyledLink>
  );
}
