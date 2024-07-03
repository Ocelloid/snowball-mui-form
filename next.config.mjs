/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "snowball-analytics.com",
        port: "",
        pathname: "/media/currencies/**",
      },
    ],
  },
};

export default nextConfig;
