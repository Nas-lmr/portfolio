import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL!;

  const staticPages = ["/", "/about", "/projects", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticPages];
}
