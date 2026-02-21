import type { MetadataRoute } from "next";

const SITE_NAME = "Ahmed Fawzy";
const SITE_SHORT_NAME = "AhmedFawzy";
const SITE_DESCRIPTION = "Ahmed Fawzy Software Engineer";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_SHORT_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#14b8a6",
    lang: "en",
    dir: "ltr",
    orientation: "portrait",
    categories: [
      "technology",
      "programming",
      "software",
      "engineer",
      "web",
      "portfolio",
      "cv",
      "resume",
      "software engineer",
    ],
    icons: [
      {
        src: "/fawzy0z.jpg",
        sizes: "192x192",
        type: "image/jpg",
        purpose: "any",
      },
      {
        src: "/fawzy0z.jpg",
        sizes: "512x512",
        type: "image/jpg",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
    shortcuts: [],
    prefer_related_applications: false,
    id: "/",
  };
}
