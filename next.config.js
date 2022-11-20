/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
  "@stripe/firestore-stripe-payments",
]); // pass the modules you would like to see transpiled

const nextConfig = withTM({
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "rb.gy"],
  },
});

module.exports = nextConfig;
