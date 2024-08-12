/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages specific settings
  output: 'export',
  basePath: '/quickstart-templates',
};

if (process.env.NODE_ENV === 'test') {
  nextConfig.assetPrefix = './';
  nextConfig.trailingSlash = true;
}

export default nextConfig;
