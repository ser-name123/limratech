import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: ".build_dist",
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
