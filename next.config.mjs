/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages specific settings
  output: 'export',
};

if (process.env.NODE_ENV === 'production') {
  // adjust GitHub Pages base path for favicon etc
  nextConfig.basePath = '/quickstart-templates';
  nextConfig.assetPrefix = '/quickstart-templates/';
}
export default nextConfig;
