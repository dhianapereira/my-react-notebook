/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'files.stripe.com'
            },
        ]
    }
}

module.exports = nextConfig
