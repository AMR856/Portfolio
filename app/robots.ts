import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "*",
    },
    sitemap: ["https://my-portfolio-eta-ebon-op7uhkivzm.vercel.app/sitemap.xml"],
  };
}
