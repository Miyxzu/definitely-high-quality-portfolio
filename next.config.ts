import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  basePath: "/definitely-high-quality-portfolio",

  output: "export",
  
  allowedDevOrigins: ['134.36.36.182'],

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
