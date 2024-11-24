import { createClient } from "@sanity/client";

const clientConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: "2023-09-01",
  useCdn: true,
};

export const sanityClient = createClient(clientConfig);

export async function fetchPosts() {
  const query = '*[_type == "post"]{title, slug, body}';
  return await sanityClient.fetch(query);
}

export async function getAllPostSlugs() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  return await sanityClient.fetch(query);
}

export async function getPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url
  }`;
  return await sanityClient.fetch(query, { slug });
}

export default sanityClient;
