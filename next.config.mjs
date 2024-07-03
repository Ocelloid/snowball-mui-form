/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "snowball-income.com",
        port: "",
        pathname: "/media/currencies/**",
      },
    ],
  },
};

export default nextConfig;
