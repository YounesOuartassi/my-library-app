/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false // Désactive le nouveau routeur
  },
  // Désactive Turbopack si nécessaire
  turbo: undefined
};

export default nextConfig;