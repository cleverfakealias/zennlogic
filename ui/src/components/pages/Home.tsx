import React from "react";

import HeroBanner from "../ui/HeroBanner";
import HomeSummary from "../home/HomeSummary";
import { Container } from "@mui/material";

export default function Home(): React.ReactElement {
  return (
    <>
      <HeroBanner />
      <HomeSummary />
    </>
  );
}
