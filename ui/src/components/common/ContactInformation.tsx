import React from "react";
import { Typography, Box, useTheme, Paper } from "@mui/material";
import SocialLinks from "./SocialLinks";

const ContactInformation: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      {/* Call to Action Section */}
      <Paper
        elevation={2}
        sx={{
          p: 4,
          textAlign: "center",
          ...theme.custom.getCallToActionStyles(),
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: theme.typography.fontWeightMedium,
            color: theme.palette.primary.main,
            mb: 2,
          }}
        >
          Let's Work Together
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.6,
            maxWidth: "600px",
            mx: "auto",
            pb: 2,
          }}
        >
          Whether you have a project in mind, want to discuss collaboration
          opportunities, or just want to connect, I'd love to hear from you.
          Feel free to reach out through any of the channels below!
        </Typography>

        <SocialLinks />
      </Paper>
    </Box>
  );
};

export default ContactInformation;
