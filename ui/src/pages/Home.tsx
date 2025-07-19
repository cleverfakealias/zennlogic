import React from "react";
import { Container } from "@mui/material";
import HeroBanner from "../components/common/HeroBanner";
import HomeSummary from "../components/features/HomeSummary";

export default function Home(): React.ReactElement {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <HeroBanner />
      <HomeSummary />
    </Container>
  );
}
