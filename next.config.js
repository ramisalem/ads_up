/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['adsup.s3.me-central-1.amazonaws.com'], // here your host image
        // formats: ['image/avif', 'image/webp', 'images/*']
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'adsup.s3.me-central-1.amazonaws.com',
                port: '',
                pathname: '/images/**'
            }
        ]
    },

    async headers() {
        return [
            {
                // Routes this applies to
                source: '/api/(.*)',
                // Headers
                headers: [
                    // Allow for specific domains to have access or * for all
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*'
                        // DOES NOT WORK
                        // value: process.env.ALLOWED_ORIGIN,
                    },
                    // Allows for specific methods accepted
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET, POST, PUT, DELETE, OPTIONS'
                    },
                    // Allows for specific headers accepted (These are a few standard ones)
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'Content-Type, Authorization'
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
