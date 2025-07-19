import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import {
  Code,
  Web,
  Storage,
  Build,
  CloudQueue,
  Support,
  Business,
} from "@mui/icons-material";
import CareerTimeline, {
  TimelineItemData,
} from "../components/features/CareerTimeline";

const DevelopmentExperience: React.FC = () => {
  const theme = useTheme();

  const programmingExperiences = [
    {
      title: "Full Stack Development",
      description:
        "With over 7 years of professional experience, I've contributed to a wide range of projects—from automating tasks with Python scripts to designing and delivering large-scale enterprise applications serving thousands of users. I bring strong expertise across both front-end and back-end development, with a focus on performance, maintainability, and scalability.",
      icon: <Code />,
      color: "primary",
    },
    {
      title: "Front-End Technologies",
      description:
        "Skilled in building modern, responsive user interfaces using JavaScript and TypeScript. I've developed applications with React.js, Next.js, and Vite, and use package managers like PNPM and NPM to streamline development. I incorporate automated testing using Jest and Cypress, and leverage Storybook to develop and document component libraries.",
      icon: <Web />,
      color: "secondary",
    },
    {
      title: "Back-End Technologies",
      description:
        "Proficient in back-end development with Java and Python. I've built services using frameworks like Dropwizard and dependency injection with Guice, and manage builds with Maven. I also write robust unit and integration tests to ensure application reliability.",
      icon: <Storage />,
      color: "success",
    },
    {
      title: "Databases",
      description:
        "Experienced with a variety of database systems including Oracle, PostgreSQL, and Microsoft SQL Server for relational data, as well as DynamoDB for NoSQL use cases. I design schemas, write performant queries, and ensure data integrity across applications.",
      icon: <Storage />,
      color: "warning",
    },
    {
      title: "CI/CD",
      description:
        "Hands-on experience with modern DevOps pipelines using Azure DevOps, Jenkins, and Drone. I've built and maintained CI/CD workflows that automate testing, deployment, and monitoring for seamless delivery.",
      icon: <Build />,
      color: "error",
    },
    {
      title: "Infrastructure & Methodologies",
      description:
        "I work confidently with Docker and Kubernetes for containerization and orchestration. I'm well-versed in microservices and event-driven architectures, and I follow Agile/Scrum practices to drive iterative development and collaboration across teams.",
      icon: <CloudQueue />,
      color: "info",
    },
  ];

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

  return (
    <Container maxWidth="lg" sx={{ py: 4, pb: 8 }}>
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
          Development Experience
        </Typography>
        <Typography
          variant="h5"
          sx={{
            maxWidth: "600px",
            mx: "auto",
            color: theme.palette.text.secondary,
            opacity: theme.palette.mode === "dark" ? 0.9 : 0.7,
          }}
        >
          Technical expertise spanning full-stack development, modern
          frameworks, and enterprise solutions
        </Typography>

        {/* Decorative line */}
        <Box
          sx={{
            mt: 3,
            width: { xs: "100px", md: "150px" },
            height: "4px",
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(90deg, #7C4DFF, #448AFF)"
                : "linear-gradient(90deg, #412A91, #002B5C)",
            borderRadius: "2px",
            mx: "auto",
          }}
        />
      </Box>

      {/* Experience Cards */}
      <Grid container spacing={4}>
        {programmingExperiences.map((experience, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, rgba(30,30,30,0.95) 0%, rgba(40,40,40,0.95) 100%)"
                    : "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)",
                backdropFilter: "blur(10px)",
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: `0 20px 40px rgba(65, 42, 145, 0.15)`,
                  "& .experience-icon": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                  "& .experience-title": {
                    color: theme.palette.primary.main,
                  },
                  ...(theme.palette.mode === "dark" && {
                    background:
                      "linear-gradient(145deg, rgba(50,50,50,0.95) 0%, rgba(60,60,60,0.95) 100%)",
                  }),
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background:
                    experience.color === "primary"
                      ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
                      : experience.color === "secondary"
                        ? `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`
                        : experience.color === "success"
                          ? `linear-gradient(90deg, ${theme.palette.success.main}, ${theme.palette.success.light})`
                          : experience.color === "warning"
                            ? `linear-gradient(90deg, ${theme.palette.warning.main}, ${theme.palette.warning.light})`
                            : experience.color === "error"
                              ? `linear-gradient(90deg, ${theme.palette.error.main}, ${theme.palette.error.light})`
                              : `linear-gradient(90deg, ${theme.palette.info.main}, ${theme.palette.info.light})`,
                },
              }}
            >
              <CardContent sx={{ p: 4, flexGrow: 1 }}>
                {/* Icon and Title */}
                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                  <Box
                    className="experience-icon"
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "16px",
                      background:
                        experience.color === "primary"
                          ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
                          : experience.color === "secondary"
                            ? `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`
                            : experience.color === "success"
                              ? `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`
                              : experience.color === "warning"
                                ? `linear-gradient(135deg, ${theme.palette.warning.main}, ${theme.palette.warning.dark})`
                                : experience.color === "error"
                                  ? `linear-gradient(135deg, ${theme.palette.error.main}, ${theme.palette.error.dark})`
                                  : `linear-gradient(135deg, ${theme.palette.info.main}, ${theme.palette.info.dark})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      mr: 3,
                      boxShadow: `0 8px 16px rgba(65, 42, 145, 0.2)`,
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "& .MuiSvgIcon-root": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    {experience.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h5"
                      component="h2"
                      className="experience-title"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        mb: 1,
                        transition: "color 0.3s ease",
                        lineHeight: 1.3,
                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                      }}
                    >
                      {experience.title}
                    </Typography>
                  </Box>
                </Box>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: "1rem",
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                    color: theme.palette.text.secondary,
                    opacity: theme.palette.mode === "dark" ? 0.9 : 0.8,
                  }}
                >
                  {experience.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <CareerTimeline
        timelineData={timelineData}
        title="Career Timeline"
        description="My professional journey in technology and software development"
      />
    </Container>
  );
};

export default DevelopmentExperience;
