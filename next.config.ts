import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/monitor/:path*',
                destination: 'https://uptime-stars-backend-api-production.up.railway.app/api/v1/monitor/:path*',
            },
            {
                source: '/api/monitor',
                destination: 'https://uptime-stars-backend-api-production.up.railway.app/api/v1/monitor',
            },
        ];
    },
};

export default nextConfig;
