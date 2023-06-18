import Image from "next/image";
import Link from "next/link";
import { styled } from "../../stitches.config";

type Props = { text: string };

const StyledDiv = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 20,
  marginBottom: 20,
  marginLeft: -10,
  padding: "0px 10px",
  width: "fit-content",
  borderRadius: 10,
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "$lightOrange",
  },
});

export default function BackButtonLink({ text }: Props) {
  return (
    <Link href="/">
      <StyledDiv>
        <Image src="/icons/arrow_back.svg" alt="Back arrow icon" width={25} height={25} />
        <p>{text}</p>
      </StyledDiv>
    </Link>
  );
}
