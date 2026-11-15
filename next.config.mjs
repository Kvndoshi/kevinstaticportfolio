/** @type {import('next').NextConfig} */

// GitHub Pages serves this project site from /kevinstaticportfolio/.
// Local `npm run dev` stays at the root.
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/kevinstaticportfolio' : '';

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  // Exposed to components so plain <a>/<img> paths get the same prefix.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
