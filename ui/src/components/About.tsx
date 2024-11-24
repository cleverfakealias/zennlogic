import React from "react";
import { Container, Typography, Box, Avatar, Grid, Paper } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        color: "#fff",
        backgroundColor: "#121212",
        padding: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h2" gutterBottom>
        About ZennLogic
      </Typography>
      <Typography variant="h5" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1" paragraph>
        Our mission is to provide amazing modern websites for anyone.
      </Typography>
      <Typography variant="h5" gutterBottom>
        About Me
      </Typography>
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar
          alt="Your Name"
          src="/images/logo.png"
          sx={{ width: 56, height: 56, marginRight: 2 }}
        />
        <Typography variant="body1">
          I am an experienced software engineer with over 7 years of development
          experience.
        </Typography>
      </Box>
      <Typography variant="h5" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" paragraph>
        You can reach me at{" "}
        <a href="mailto:bjh@zennlogic.com" style={{ color: "#90caf9" }}>
          bjh@zennlogic.com
        </a>
        .
      </Typography>
      <Typography variant="h5" gutterBottom>
        Testimonials
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: 2, backgroundColor: "#1e1e1e" }}>
            <Typography variant="body1" paragraph>
              "ZennLogic provided us with an amazing website that exceeded our
              expectations."
            </Typography>
            <Typography variant="body2" align="right">
              - Happy Client
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: 2, backgroundColor: "#1e1e1e" }}>
            <Typography variant="body1" paragraph>
              "The professionalism and quality of work from ZennLogic are
              unmatched."
            </Typography>
            <Typography variant="body2" align="right">
              - Satisfied Customer
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
