import createImageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./sanityClient";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = createImageUrlBuilder(sanityClient);

export default function (source: SanityImageSource) {
  return builder.image(source);
}
