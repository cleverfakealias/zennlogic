import React from "react";
import LogoBanner from "./LogoBanner";
import About from "./About";
import Blog from "./blog/Blog";
import { Container } from "@mui/material";
export default function Home(): React.ReactElement {
  return (
    <Container>
      <LogoBanner />
      <About />
      <Blog />
    </Container>
  );
}
