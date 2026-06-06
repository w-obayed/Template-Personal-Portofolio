/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio.azadhossen.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};
export default nextConfig;
