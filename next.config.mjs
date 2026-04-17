if (typeof global !== 'undefined' && global.localStorage && typeof global.localStorage.getItem !== 'function') {
  delete global.localStorage;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 this enables static export
  images: {
    unoptimized: true, // Required for static export
    domains: ['www.svgrepo.com', 'images.unsplash.com', 'randomuser.me', 'www.stemorbit.com'],
  },
};

export default nextConfig;
