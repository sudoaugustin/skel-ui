import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  images: { remotePatterns: [{ hostname: "plus.unsplash.com" }] },
  reactStrictMode: true,
};

export default withMDX(config);
