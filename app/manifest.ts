import type { MetadataRoute } from "next";

const SITE_NAME = "Amr Alnus";
const SITE_SHORT_NAME = "AmrAlnus";
const SITE_DESCRIPTION = "Ahmed Fawzy Backend & Flutter Developer";

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
    
    shortcuts: [],
    prefer_related_applications: false,
    id: "/",
  };
}
