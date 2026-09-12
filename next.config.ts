import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Tried `experimental.optimizeCss` (inlines critical CSS into <head> as
  // a <style> block, defers the rest) to cut down the render-blocking CSS
  // Lighthouse flags — confirmed it does nothing for `output: "export"`:
  // critters' critical-CSS extraction runs per-request against a live
  // server render, which a fully static export never has. Reverted (and
  // removed the `critters` devDependency it needed) rather than keep a
  // flag doing nothing plus extra install weight for no benefit.
  images: {
    loader: "custom",
    loaderFile: "./src/image-loader.ts",
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1400],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
