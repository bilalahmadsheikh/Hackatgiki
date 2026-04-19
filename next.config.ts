import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "hack-nation.ai",
      },
    ],
  },
  // Allow cross-origin dev server access (from phone/other devices on the network)
  allowedDevOrigins: ["localhost:3000", "10.1.145.220", "10.1.145.35"],
}

export default nextConfig
