/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
      preventFullImport: true,
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  output: 'standalone',
};

const withPWA = require('next-pwa')({
  dest: 'public',
  swSrc: 'service-worker.js',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA(nextConfig);
