import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Box,
  useTheme,
  Container,
  Avatar,
  Chip,
  styled,
} from "@mui/material";
import { Business, Support, Code } from "@mui/icons-material";

interface TimelineItemData {
  title: string;
  subtitle: string;
  description: string;
  timestamp: string;
  color: "primary" | "secondary" | "success" | "warning" | "error";
  icon: React.ReactNode;
  startDate: string; // For sorting
}

const timelineData: TimelineItemData[] = [
  {
    title: "Software Engineer",
    subtitle: "SPS Commerce",
    description:
      "Seasoned Software Developer working on enterprise SaaS applications, focusing on scalable cloud solutions and modern web technologies.",
    timestamp: "2017 - Present",
    startDate: "2017",
    color: "primary",
    icon: <Code />,
  },
  {
    title: "Support Supervisor",
    subtitle: "WhereToLive.com",
    description:
      "Managed technical support team for web development and email hosting services in the Real Estate industry, leading a team of 8+ support representatives.",
    timestamp: "2012 - 2017",
    startDate: "2012",
    color: "secondary",
    icon: <Business />,
  },
  {
    title: "Technical Support Representative",
    subtitle: "Microboards Technology",
    description:
      "Provided comprehensive technical support for CD and DVD replication and printing devices, troubleshooting hardware and software issues.",
    timestamp: "2007 - 2012",
    startDate: "2007",
    color: "success",
    icon: <Support />,
  },
];

// Styled components for the timeline
const TimelineContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(2, 0),

  // Timeline line
  "&::before": {
    content: '""',
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: "2px",
    backgroundColor: theme.palette.divider,
    transform: "translateX(-50%)",
    [theme.breakpoints.down("md")]: {
      left: "32px",
    },
  },
}));

const TimelineItem = styled(Box)<{ index: number }>(({ theme, index }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(4),

  // Alternate sides on desktop
  flexDirection: index % 2 === 0 ? "row" : "row-reverse",

  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
    paddingLeft: theme.spacing(8),
  },
}));

const TimelineContent = styled(Box)<{ index: number }>(({ theme, index }) => ({
  width: "45%",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginLeft: theme.spacing(2),
  },

  // Add some spacing between content and center line
  ...(index % 2 === 0
    ? {
        paddingRight: theme.spacing(4),
        [theme.breakpoints.down("md")]: {
          paddingRight: 0,
        },
      }
    : {
        paddingLeft: theme.spacing(4),
        [theme.breakpoints.down("md")]: {
          paddingLeft: 0,
          marginLeft: theme.spacing(2),
        },
      }),
}));

const TimelineDot = styled(Avatar)<{ color: string }>(({ theme, color }) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  width: 56,
  height: 56,
  zIndex: 2,
  boxShadow: theme.shadows[4],

  [theme.breakpoints.down("md")]: {
    left: "32px",
  },

  // Color variants
  ...(color === "primary" && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  }),
  ...(color === "secondary" && {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  }),
  ...(color === "success" && {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  }),
  ...(color === "warning" && {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  }),
  ...(color === "error" && {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  }),
}));

const CareerTimeline: React.FC = () => {
  const theme = useTheme();

  // Sort timeline items by start date (most recent first)
  const sortedTimelineData = [...timelineData].sort(
    (a, b) => parseInt(b.startDate) - parseInt(a.startDate),
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
            mb: 2,
          }}
        >
          Career Timeline
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ maxWidth: "600px", mx: "auto" }}
        >
          My professional journey in technology and software development
        </Typography>

        {/* Decorative line */}
        <Box
          sx={{
            mt: 3,
            width: { xs: "100px", md: "150px" },
            height: "4px",
            background: "linear-gradient(90deg, #412A91, #002B5C)",
            borderRadius: "2px",
            mx: "auto",
          }}
        />
      </Box>

      {/* Timeline */}
      <TimelineContainer>
        {sortedTimelineData.map((item, index) => (
          <TimelineItem key={index} index={index}>
            {/* Timeline Dot */}
            <TimelineDot color={item.color}>{item.icon}</TimelineDot>

            {/* Timeline Content */}
            <TimelineContent index={index}>
              <Card
                elevation={3}
                sx={{
                  transition:
                    "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: theme.shadows[8],
                  },
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Timestamp Chip */}
                  <Chip
                    label={item.timestamp}
                    color={item.color}
                    variant="outlined"
                    size="small"
                    sx={{ mb: 2 }}
                  />

                  {/* Job title */}
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Company */}
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{
                      mb: 2,
                      fontWeight: 500,
                    }}
                  >
                    {item.subtitle}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      textAlign: "justify",
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </Container>
  );
};

export default CareerTimeline;
