import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "nacos.org.ng" },
      { protocol: "https", hostname: "nunhr.nileuniversity.edu.ng" },
      { protocol: "https", hostname: "www.ncs.org.ng" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
