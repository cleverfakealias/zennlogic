import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "./sanity/sanityClient";
import imageUrlBuilder from "./sanity/imageUrl";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Box,
  Chip,
  useTheme,
  Skeleton,
} from "@mui/material";
import { AccessTime, Person } from "@mui/icons-material";
import { BlogPost } from "./sanity/types";

export default function Blog(): React.ReactElement {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    fetchPosts()
      .then((posts) => {
        // Ensure posts are sorted newest to oldest
        const sortedPosts = posts.sort((a: BlogPost, b: BlogPost) => {
          const dateA = new Date(a.publishedAt || a._createdAt || 0);
          const dateB = new Date(b.publishedAt || b._createdAt || 0);
          return dateB.getTime() - dateA.getTime(); // Newest first
        });
        setPosts(sortedPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Recently";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const BlogSkeleton = () => (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%" }}>
        <Skeleton variant="rectangular" width="100%" height={200} />
        <CardContent>
          <Skeleton variant="text" sx={{ fontSize: "1.5rem", mb: 1 }} />
          <Skeleton variant="text" sx={{ mb: 2 }} />
          <Skeleton variant="text" width="60%" />
        </CardContent>
      </Card>
    </Grid>
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
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.primary.main,
            mb: 2,
          }}
        >
          Blog
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
          Insights on software architecture, cloud technologies, and building
          scalable applications
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
            borderRadius: theme.shape.borderRadius,
            mx: "auto",
          }}
        />
      </Box>

      {/* Blog Posts Grid */}
      <Grid
        container
        spacing={4}
        direction="row"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {loading ? (
          // Loading skeletons
          Array.from(new Array(6)).map((_, index) => (
            <BlogSkeleton key={index} />
          ))
        ) : posts.length === 0 ? (
          // Empty state
          <Grid item xs={12}>
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                No blog posts yet
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Check back soon for insights and updates!
              </Typography>
            </Box>
          </Grid>
        ) : (
          // Blog posts
          posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.slug.current}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(145deg, rgba(30,30,30,0.95) 0%, rgba(40,40,40,0.95) 100%)"
                      : "linear-gradient(145deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.96) 100%)",
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(65, 42, 145, 0.10)",
                  overflow: "hidden",
                  position: "relative",
                  "& .MuiCardMedia-root": {
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  },
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: "0 20px 40px rgba(65, 42, 145, 0.15)",
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
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                  },
                }}
              >
                <CardActionArea
                  component={Link}
                  to={`/blog/post/${post.slug.current}`}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                  }}
                >
                  {/* Featured Image */}
                  {post.mainImage && (
                    <CardMedia
                      component="img"
                      height="200"
                      image={(() => {
                        const builder = imageUrlBuilder(post.mainImage);
                        if (
                          "width" in builder &&
                          typeof builder.width === "function"
                        ) {
                          return builder.width(400).height(200).url();
                        }
                        return builder.url();
                      })()}
                      alt={post.mainImage.alt || post.title}
                      sx={{
                        objectFit: "cover",
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      }}
                    />
                  )}

                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    {/* Title */}
                    <Typography
                      variant="h5"
                      component="h2"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        mb: 2,
                        lineHeight: 1.3,
                      }}
                    >
                      {post.title}
                    </Typography>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 3,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          lineHeight: theme.typography.body2?.lineHeight || 1.5,
                          color: theme.palette.text.secondary,
                          opacity: theme.palette.mode === "dark" ? 0.9 : 0.8,
                        }}
                      >
                        {post.excerpt}
                      </Typography>
                    )}

                    {/* Meta Information */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mt: "auto",
                      }}
                    >
                      {/* Date */}
                      <Chip
                        icon={<AccessTime />}
                        label={formatDate(post.publishedAt)}
                        size="small"
                        variant="outlined"
                      />

                      {/* Reading Time */}
                      {post.estimatedReadingTime && (
                        <Chip
                          label={`${post.estimatedReadingTime} min read`}
                          size="small"
                          variant="outlined"
                        />
                      )}

                      {/* Author */}
                      {post.author && (
                        <Chip
                          icon={<Person />}
                          label={post.author}
                          size="small"
                          variant="outlined"
                        />
                      )}
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
