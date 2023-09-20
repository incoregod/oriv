import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "gs46ww16",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-09-19",
  token: import.meta.env.VITE_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
