import React from "react";
import { Container, Typography, Box, useTheme } from "@mui/material";

const HeroBanner: React.FC = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{
        pt: { xs: 1, md: 2 }, // Small responsive top padding
        pb: { xs: 3, md: 4 }, // Responsive bottom padding
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        minHeight: 'auto',
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          flex: '0 0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="/images/ABE.png"
          alt="ABE - Architect, Build, Elevate"
          style={{
            maxWidth: '300px',
            width: '100%',
            height: 'auto',
            filter: theme.palette.mode === 'dark' ? 'brightness(1.1)' : 'brightness(0.9)',
            transition: 'filter 0.3s ease',
          }}
        />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: 'center', md: 'left' },
          maxWidth: { xs: '100%', md: '600px' },
        }}
      >
        {/* Decorative accent above */}
        <Box
          sx={{
            mb: 4,
            width: '100%',
            height: '4px',
            background: theme.palette.mode === 'dark' 
              ? 'linear-gradient(90deg, #7C4DFF, #448AFF)'
              : 'linear-gradient(90deg, #412A91, #002B5C',
            borderRadius: '2px',
          }}
        />

        <Typography
          variant="h5"
          component="p"
          sx={{
            mb: 3,
            lineHeight: 1.6,
            color: theme.palette.text.primary,
            fontWeight: 400,
            fontSize: { xs: '1.1rem', md: '1.3rem' },
          }}
        >
          I architect cloud-native systems, build reliable software, and elevate ideas into scalable, secure applications.
        </Typography>

        <Typography
          variant="h6"
          component="p"
          sx={{
            color: theme.palette.text.secondary,
            fontStyle: 'italic',
            lineHeight: 1.5,
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          My mission is to turn complexity into clarity—delivering solutions that are efficient, maintainable, and built to grow.
        </Typography>

        {/* Decorative accent below */}
        <Box
          sx={{
            mt: 4,
            width: '100%',
            height: '4px',
            background: theme.palette.mode === 'dark' 
              ? 'linear-gradient(90deg, #7C4DFF, #448AFF)'
              : 'linear-gradient(90deg, #412A91, #002B5C',
            borderRadius: '2px',
          }}
        />
      </Box>
    </Container>
  );
};

export default HeroBanner;
