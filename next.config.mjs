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
      {
        protocol: "https",
        hostname: "cdn.countryflags.com",
        port: "",
        pathname: "/thumbs/**",
      },
    ],
  },
};

export default nextConfig;
