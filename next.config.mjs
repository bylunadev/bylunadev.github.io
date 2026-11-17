// Static export for GitHub Pages. PAGES_BASE_PATH is only needed if the site
// ever moves to a project repository ("/<repo>"); the user site needs none.
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
