import React from "react";
import { styled } from "../../stitches.config";

type Props = {
  date: string;
};

const StyledDiv = styled("div", {
  fontSize: "$s",
  color: "$darkGray",
  height: "fit-content",
});

export default function Date({ date }: Props) {
  return <StyledDiv>{date}</StyledDiv>;
}
