const nextConfig = {
  async rewrites() {
    return [{
      source: '/api/batches',
      destination: 'https://rolexcoderz.in/donate/batches_api.php?action=all_batches',
    }];
  },
};

export default nextConfig;
