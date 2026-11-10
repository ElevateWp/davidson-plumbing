const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/about-roofing', destination: '/about/', permanent: true },
      { source: '/roofing-services', destination: '/services/', permanent: true },
      { source: '/roofing-reviews', destination: '/reviews/', permanent: true },
      { source: '/roofing-team/:path*', destination: '/team/:path*', permanent: true },
      { source: '/roofing-quote', destination: '/quote/', permanent: true },
      { source: '/contact-roofing', destination: '/contact/', permanent: true },
      { source: '/roofing-advice/:path*', destination: '/plumbing-advice/:path*', permanent: true },
      { source: '/roof-repair', destination: '/drain-cleaning/', permanent: true },
      { source: '/roof-leak-repair', destination: '/leak-detection/', permanent: true },
      { source: '/roof-replacement', destination: '/water-heater-installation/', permanent: true },
      { source: '/roof-installation', destination: '/commercial-plumbing/', permanent: true },
      { source: '/roof-inspections', destination: '/backflow-testing/', permanent: true },
      { source: '/storm-damage-roof-repair', destination: '/emergency-plumbing/', permanent: true },
      { source: '/roof-maintenance', destination: '/drain-cleaning/', permanent: true },
    ];
  },
  images: { unoptimized: true, remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
};
export default nextConfig;
