
const ContentSecurityPolicy = "base-uri; child-src; connect-src 'self' *; default-src; font-src; form-action; frame-ancestors 'self' *; frame-src 'self'; img-src 'self' * data:; manifest-src 'self'; media-src 'self'; object-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline';"

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },  
  distDir: 'build',
  poweredByHeader: false,
}

