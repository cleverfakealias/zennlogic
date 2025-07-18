import React from "react";
import { Typography, Grid, Box, Link, useTheme } from "@mui/material";
import { Email, Phone, LinkedIn, GitHub } from "@mui/icons-material";

const ContactInformation: React.FC = () => {
  const theme = useTheme();

  const contactItems = [
    {
      icon: <Email sx={{ color: theme.palette.text.primary }} />,
      primary: "Email",
      secondary: "bjh@zennlogic.com",
      link: "mailto:bjh@zennlogic.com",
      color: theme.palette.primary.main,
    },
    {
      icon: <Phone sx={{ color: theme.palette.text.primary }} />,
      primary: "Phone",
      secondary: "(651) 300-4252",
      link: "tel:+16513004252",
      color: theme.palette.secondary.main,
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn sx={{ color: theme.palette.text.primary }} />,
      name: "LinkedIn",
      url: "https://linkedin.benhickman.dev",
      color: "#0077b5",
    },
    {
      icon: <GitHub sx={{ color: "#24292f" }} />,
      name: "GitHub",
      url: "https://github.benhickman.dev",
      color: theme.palette.grey[200],
    },
  ];

  // Combine contact and social items for a unified grid
  const gridItems = [
    ...contactItems.map((item) => ({
      icon: (
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: item.color,
            boxShadow: "0 2px 8px 0 rgba(31,38,135,0.10)",
            mb: 1,
            cursor: "pointer",
            transition: "box-shadow 0.2s",
            "&:hover": {
              boxShadow: "0 4px 16px 0 rgba(31,38,135,0.18)",
              opacity: 0.85,
            },
          }}
          component={item.link ? Link : "div"}
          href={item.link || undefined}
          target={
            item.link && item.link.startsWith("http") ? "_blank" : undefined
          }
          rel={
            item.link && item.link.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
        >
          {React.cloneElement(item.icon, {
            sx: { color: "#fff", fontSize: 28 },
          })}
        </Box>
      ),
      label: item.primary,
      value: null, // Hide the actual value
      color: item.color,
    })),
    ...socialLinks.map((social) => ({
      icon: (
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: social.color,
            boxShadow: "0 2px 8px 0 rgba(31,38,135,0.10)",
            mb: 1,
            cursor: "pointer",
            transition: "box-shadow 0.2s",
            "&:hover": {
              boxShadow: "0 4px 16px 0 rgba(31,38,135,0.18)",
              opacity: 0.85,
            },
          }}
          component={Link}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {React.cloneElement(social.icon, {
            sx: { color: "#fff", fontSize: 28 },
          })}
        </Box>
      ),
      label: social.name,
      value: null, // Hide the actual value
      color: social.color,
    })),
  ];

  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.primary.main,
          }}
        >
          Contact Information
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.text.secondary }}
        >
          Reach out directly or connect with me online.
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {gridItems.map((item, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={idx}
            sx={{ textAlign: "center" }}
          >
            <Box
              sx={{
                mb: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.icon}
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: theme.typography.fontWeightMedium,
                color: theme.palette.text.primary,
                mb: 0.5,
                fontSize: theme.typography.subtitle1?.fontSize,
              }}
            >
              {item.label}
            </Typography>
            {item.value && (
              <Box
                sx={{
                  fontSize: theme.typography.body2?.fontSize,
                  color: theme.palette.text.secondary,
                  wordBreak: "break-all",
                }}
              >
                {item.value}
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
      {/* Additional Information */}
      <Box
        sx={{
          mt: 6,
          p: 3,
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.04)"
              : theme.palette.grey[50],
          borderRadius: `${theme.shape.borderRadius}px`, // Explicitly match the rest of the app
        }}
      >
        <Typography
          variant="body1"
          sx={{ textAlign: "center", color: "text.secondary" }}
        >
          I'm always interested in hearing about new opportunities and
          interesting projects. Feel free to reach out if you'd like to connect!
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactInformation;
