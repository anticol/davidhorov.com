/** @type {import('next').NextConfig} */
module.exports = {
    swcMinify: true,
    
    // Enable native styled-components support for better performance
    compiler: {
        styledComponents: {
            ssr: true,
            displayName: true,
        },
    },
    
    // Image optimization configuration
    images: {
        domains: [
            'cdn.jsdelivr.net',
            'raw.githubusercontent.com',
            'testing-library.com',
            'cdn.candycode.com',
            'react-hook-form.com',
            'code.kiwi.com',
            'freeutilitytools.com',
        ],
        formats: ['image/avif', 'image/webp'],
    },
    
    // Security headers for better Best Practices score
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()'
                    },
                ],
            },
        ];
    },
    
    async redirects() {
        return [
          {
            source: '/blog',
            destination: '/',
            permanent: true,
          },
        ]
      },
};
