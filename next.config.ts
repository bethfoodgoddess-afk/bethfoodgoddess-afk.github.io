import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
import { withContentlayer } from 'next-contentlayer2';
import createNextMdx from '@next/mdx';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const withNextMdx = createNextMdx({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  // reactStrictMode: true,
  output: 'export',
  basePath: '/web002',
  trailingSlash: false,
  skipTrailingSlashRedirect: false,
  devIndicators: false,
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // revalidate: false,

  eslint: {
    // dirs: ['app', 'components', 'layouts', 'scripts'],
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default withContentlayer(withNextMdx(withNextIntl(nextConfig)));
