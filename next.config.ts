import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/our-services", destination: "/services", permanent: true },
      { source: "/blog", destination: "/blogs", permanent: true },
      { source: "/web-development", destination: "/website-development-services", permanent: true },
      { source: "/digital-marketing", destination: "/digital-marketing-agency-india", permanent: true },
      { source: "/lead-generation", destination: "/lead-generation-company-india", permanent: true },
      { source: "/graphic-design", destination: "/creative-design-solutions-india", permanent: true },
      { source: "/app-development", destination: "/mobile-app-developer-india", permanent: true },
      { source: "/software-development", destination: "/software-developers-india", permanent: true },
      { source: "/terms-of-use", destination: "/terms-and-conditions", permanent: true },
    ];
  },
};

export default nextConfig;

