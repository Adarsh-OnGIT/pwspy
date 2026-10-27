async rewrites() {
  return {
    beforeFiles: [
      { source: '/Check/:path*', destination: 'https://rolexcoderz.com/Check/:path*' },
      { source: '/PW/:path*',    destination: 'https://rolexcoderz.com/PW/:path*' },
      { source: '/VT/:path*',    destination: 'https://rolexcoderz.com/VT/:path*' },
      { source: '/NT/:path*',    destination: 'https://rolexcoderz.com/NT/:path*' },
      { source: '/AR/:path*',    destination: 'https://rolexcoderz.com/AR/:path*' },
      { source: '/Pi/:path*',    destination: 'https://rolexcoderz.com/Pi/:path*' },
    ],
  };
}
