import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "./sanity/sanityClient";
import { Post } from "./sanity/types";
import { Container } from "@mui/material";
import BlogBody from "./BlogBody";

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          body,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }`,
        { slug }
      )
      // TODO: Come back and fix this typing
      .then((data: Post) => setPost(data))
      .catch(console.error);
  }, [slug]);

  return (
    <Container>
      {!post && <div>Loading...</div>}
      {<BlogBody post={post} />}
    </Container>
  );
};

export default BlogPostDetail;
