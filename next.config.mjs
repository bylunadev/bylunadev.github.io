// Static export for GitHub Pages. The Pages workflow sets PAGES_BASE_PATH
// (empty for a <user>.github.io repository, "/<repo>" otherwise).
const basePath = process.env.PAGES_BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
