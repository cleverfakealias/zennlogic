// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   Container,
//   Typography,
//   Grid2,
// } from "@mui/material";
// import imageUrl from "./imageUrl";
// import { Image, Post, Block } from "./types";
// import { fetchPosts } from "./sanityClient";

// const BlogPosts = (): React.ReactElement => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   useEffect(() => {
//     fetchPosts().then(setPosts);
//   }, []);
//   return (
//     <Container>
//       <h1>Blog Posts</h1>
//       <Grid2 container spacing={2}>
//         {posts.map((post) => (
//           <Grid2 container key={post.slug.current}>
//             <Card>
//               <CardHeader title={post.title} />
//               <CardContent>
//                 {post.body.map((blockOrImage) => {
//                   if (blockOrImage._type === "block") {
//                     const block = blockOrImage as Block;
//                     return block.children.map((span) => (
//                       <Typography key={span._key} variant="body2">
//                         {span.text}
//                       </Typography>
//                     ));
//                   } else if (blockOrImage._type === "image") {
//                     const image = blockOrImage as Image;
//                     return (
//                       <img
//                         key={image._key}
//                         src={imageUrl(image.asset._ref).width(400).url()}
//                         alt="Blog Post Image"
//                         style={{ width: "100%", height: "auto" }}
//                       />
//                     );
//                   }
//                   return null;
//                 })}
//               </CardContent>
//             </Card>
//           </Grid2>
//         ))}
//       </Grid2>
//     </Container>
//   );
// };

// export default BlogPosts;
