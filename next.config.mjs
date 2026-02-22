import withPWA from "next-pwa";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

const pwaConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",

  runtimeCaching: [
    {
      urlPattern: ({ request }) => request.destination === "document",
      handler: "NetworkFirst",
      options: {
        cacheName: "pages",
        networkTimeoutSeconds: 3,
      },
    },
    {
      urlPattern: ({ request }) =>
        ["style", "script", "image", "font"].includes(request.destination),
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "assets",
      },
    },
  ],
});


export default pwaConfig(nextConfig);
