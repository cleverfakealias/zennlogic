import React from "react";
import { Typography, Box, useTheme, Paper, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroBanner: React.FC = () => {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, md: 4 },
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #23243a 0%, #2c2e4d 100%)"
            : "linear-gradient(135deg, #f5f7fa 0%, #e8eaf6 100%)",
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 4px 32px 0 rgba(124,77,255,0.10)"
            : "0 4px 32px 0 rgba(65,42,145,0.08)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated/gradient accent bar (top left) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 8,
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(90deg, #7C4DFF, #448AFF)"
              : "linear-gradient(90deg, #412A91, #002B5C)",
          opacity: 0.9,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
      />

      {/* Logo Section */}
      <Box
        sx={{
          flex: "0 0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <img
          src="/images/ABE.png"
          alt="ABE - Architect, Build, Elevate"
          style={{
            maxWidth: "300px",
            width: "100%",
            height: "auto",
            filter:
              theme.palette.mode === "dark"
                ? "brightness(1.1)"
                : "brightness(0.9)",
            transition: "filter 0.3s ease",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 4px 24px 0 rgba(124,77,255,0.15)"
                : "0 4px 24px 0 rgba(65,42,145,0.10)",
            borderRadius: 4,
          }}
        />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
          maxWidth: { xs: "100%", md: "600px" },
          zIndex: 1,
        }}
      >
        <Typography
          variant="h5"
          component="p"
          sx={{
            mb: 3,
            lineHeight: 1.6,
            color: theme.palette.text.primary,
            fontWeight: 400,
            fontSize: { xs: "1.1rem", md: "1.3rem" },
          }}
        >
          I architect cloud-native systems, build reliable software, and elevate
          ideas into scalable, secure applications.
        </Typography>

        <Typography
          variant="h6"
          component="p"
          sx={{
            color: theme.palette.text.secondary,
            fontStyle: "italic",
            lineHeight: 1.5,
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          My mission is to turn complexity into clarity—delivering solutions
          that are efficient, maintainable, and built to grow.
        </Typography>

        {/* Call-to-action button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{
            mt: 4,
            borderRadius: 4,
            fontWeight: 600,
            px: 4,
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 2px 8px 0 rgba(124,77,255,0.18)"
                : "0 2px 8px 0 rgba(65,42,145,0.12)",
            textTransform: "none",
            fontSize: { xs: "1rem", md: "1.1rem" },
            letterSpacing: 0,
            transition: "box-shadow 0.2s",
            "&:hover": {
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0 4px 16px 0 rgba(124,77,255,0.25)"
                  : "0 4px 16px 0 rgba(65,42,145,0.18)",
            },
          }}
          href="/contact"
        >
          Let's Connect
        </Button>
      </Box>
    </Paper>
  );
};

export default HeroBanner;
