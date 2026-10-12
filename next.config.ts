import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel deployment requires the standard .next directory.
  // In local development on Windows, isolate to .build_dist to avoid file lock issues.
  ...(process.env.VERCEL || process.env.NODE_ENV === "production" ? {} : { distDir: ".build_dist" }),
  typedRoutes: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
