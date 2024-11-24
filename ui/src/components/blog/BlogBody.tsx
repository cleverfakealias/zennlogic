import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import { Post } from "./sanity/types";

interface BlogBodyProps {
  post: Post;
}

const BlogBody: React.FC<BlogBodyProps> = ({ post }) => {
  return (
    <Box sx={{ width: "90%", maxWidth: 800, margin: "0 auto", padding: 2 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        {post.title}
      </Typography>
      {post.image && (
        <CardMedia
          component="img"
          image={post.mainImage.asset.url}
          alt={post.mainImage.alt || "Blog main image"}
          sx={{
            width: "100%",
            maxHeight: 400,
            objectFit: "cover",
            borderRadius: 2,
            marginBottom: 2,
          }}
        />
      )}
      {post.body.map((block) => {
        if (block._type === "image") {
          return (
            // Continue with the rest of the code
          );
        }
      })}
    </Box>
  );
};

export default BlogBody;