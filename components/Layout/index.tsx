import Head from "next/head";
import React from "react";
import { styled } from "../../stitches.config";
import Header from "./Header";

const StyledLayout = styled("div", {
  padding: "10px 20px",
  "& h1, h2": {
    fontFamily: "DM Sans",
  },
  "@laptop": {
    width: "50vw",
    margin: "auto",
    padding: 0,
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <Header />
      <main>{children}</main>
    </StyledLayout>
  );
}
