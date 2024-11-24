import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPostSlugs } from "./sanity/sanityClient";
import {
  Container,
  Grid2,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";

interface PostSlug {
  slug: string;
}

export default function Blog(): React.ReactElement {
  const [postSlugs, setPostSlugs] = useState<PostSlug[]>([]);

  useEffect(() => {
    getAllPostSlugs().then((slugs) => {
      setPostSlugs(slugs);
    });
  }, []);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Blog
      </Typography>
      <Grid2 container spacing={4}>
        {postSlugs.map((postSlug) => (
          <Grid2 container key={postSlug.slug}>
            <Card>
              <CardActionArea component={Link} to={`post/${postSlug.slug}`}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {postSlug.slug}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}
