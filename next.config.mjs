/** @type {import('next').NextConfig} */

const fullHostname = process.env.S3_BUCKET_NAME + ".s3.us-east-1.amazonaws.com"
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: fullHostname,
            port: '',
          },
        ],
      },
}

export default nextConfig
