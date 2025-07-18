import React from "react";
import { Container, Paper } from "@mui/material";
import HeroBanner from "../ui/HeroBanner";
import HomeSummary from "../home/HomeSummary";

export default function Home(): React.ReactElement {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <HeroBanner />
      <Paper elevation={1} sx={{ p: { xs: 2, md: 4 }, mt: 4 }}>
        <HomeSummary />
      </Paper>
    </Container>
  );
}
